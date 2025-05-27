interface SlideshowConfig {
    containerId: string;
    images: string[];
    interval: number;
}

class Slideshow {
    private container: HTMLElement;
    private images: string[];
    private currentIndex: number;
    private interval: number;
    private timeoutId?: number;

    constructor(config: SlideshowConfig) {
        const container = document.getElementById(config.containerId);
        if (!container) throw new Error(`Container ${config.containerId} not found`);
        
        this.container = container;
        this.images = config.images;
        this.interval = config.interval;
        this.currentIndex = 0;
        
        this.initialise();
    }

    private initialise(): void {
        // Create and append all images
        this.images.forEach((src, index) => {
            const img = document.createElement('img');
            img.src = src;
            img.alt = `Slideshow image ${index + 1}`;
            img.style.opacity = index === 0 ? '1' : '0';
            this.container.appendChild(img);
        });

        // Start the slideshow
        this.startSlideshow();
    }

    private startSlideshow(): void {
        this.timeoutId = window.setInterval(() => {
            // Get all images
            const images = Array.from(this.container.getElementsByTagName('img'));
            if (images.length === 0) return;

            // Hide current image
            images[this.currentIndex].style.opacity = '0';

            // Move to next image
            this.currentIndex = (this.currentIndex + 1) % images.length;

            // Show next image
            images[this.currentIndex].style.opacity = '1';
        }, this.interval);
    }

    public stop(): void {
        if (this.timeoutId) {
            window.clearInterval(this.timeoutId);
        }
    }
}

// Initialize the slideshow when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new Slideshow({
        containerId: 'photo-slideshow',
        images: [
            '/assets/photos/old_film/34010031.JPG',
            '/assets/photos/syd_24\'/DSCF4607.JPG',
            '/assets/photos/china_trip_2/DSCF4174.JPG',
            '/assets/photos/fitzroy/DSCF3610.JPG',
            '/assets/photos/china_trip_1/DSCF3324.JPG',
            '/assets/photos/raglan/DSCF3039.JPG'
        ],
        interval: 2500 // 2.5 seconds
    });
}); 