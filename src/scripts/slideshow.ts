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

document.addEventListener('DOMContentLoaded', () => {
    new Slideshow({
        containerId: 'photo-slideshow',
        images: [
            'https://res.cloudinary.com/dmajxoe5p/image/upload/v1755497161/34010031_w3wi5v.jpg',
            'https://res.cloudinary.com/dmajxoe5p/image/upload/v1755496896/DSCF4607_Resize_Image_e8fx7x.jpg',
            'https://res.cloudinary.com/dmajxoe5p/image/upload/v1755494383/Resize_Image_10MB_4_vwl6rs.jpg',
            'https://res.cloudinary.com/dmajxoe5p/image/upload/v1755494951/DSCF3610_Resize_Image_sgx176.jpg',
            'https://res.cloudinary.com/dmajxoe5p/image/upload/v1755492968/DSCF3324_Resized_Image_gkbbqd.jpg',
            'https://res.cloudinary.com/dmajxoe5p/image/upload/v1755496375/DSCF3039_Resize_Image_kxclga.jpg'
        ],
        interval: 2500 
    });
}); 