export interface ProjectLink {
  label: string;
  href: string;
  text: string;
}

export interface Project {
  date: string;
  title: string;
  summary: string;
  bullets: string[];
  links: ProjectLink[];
}

export const PROJECTS: Project[] = [
  {
    date: '2026',
    title: 'Crypto Trading Research Framework',
    summary: 'A systematic trading research framework for cryptocurrency markets',
    bullets: [
      'Built several strategies including trend-following (MA crossover, time-series momentum), mean reversion (RSI), and breakout (Donchian channels) plus signal filters and hard/soft voting ensembles',
      'Wrote a vectorised backtesting engine over a real cash ledger, applying per-trade fees and basis-point slippage, and enforces a one-bar execution delay to eliminate lookahead bias',
      'Validated out-of-sample via walk-forward analysis, with parameter sweeps favouring robust plateaus over fragile single-point optima. Achieved an out-of-sample Sharpe of 1.19 against a buy-and-hold benchmark of 0.79',
      "Added Monte Carlo block-bootstrap resampling to produce distributions of final return and max drawdown rather than the single historical draw, plus a noise-perturbation check measuring how much a strategy's edge depends on the exact price path",
    ],
    links: [
      { label: 'Github repo:', href: 'https://github.com/biu6iu/unstable-coins', text: 'Crypto Trading Framework' },
    ],
  },
  {
    date: '2026',
    title: 'Bass Tab Generator',
    summary: 'Automatically generates bass tabs from an MP3 file.',
    bullets: [
      'Architected a 5 stage pipeline: audio ingestion -> source separation -> note transcription -> key/tempo/meter analysis -> tab rendering',
      "Integrated pretrained deep learning models (Meta's Demucs for source separation, Spotify's Basic Pitch for pitch/onset detection) with classical MIR techniques (Constant-Q chroma features, Krumhansl-Schmuckler key finding, beat tracking) via librosa.",
    ],
    links: [
      { label: 'Github repo:', href: 'https://github.com/biu6iu/bass-tab-generator', text: 'Bass tab generator' },
    ],
  },
  {
    date: '2026',
    title: 'Naive Bayes Classifier',
    summary: 'An end-to-end Naive Bayes classification pipeline',
    bullets: [
      'Built a complete ML pipeline for preprocessing, training, prediction, and evaluation',
      'Everything built from scratch based on the Naive Bayes algorithm',
      'Implemented a hybrid Naive Bayes classifier supporting both categorical features (Laplace smoothing) and continuous features (Gaussian likelihood estimation).',
    ],
    links: [
      { label: 'Github repo:', href: 'https://github.com/biu6iu/naive-bayes-classifier', text: 'Naive Bayes Classifier' },
    ],
  },
  {
    date: '2026',
    title: 'NBA Win Predictor Model',
    summary: 'An XGBoost classification model for predicting NBA regular season outcomes',
    bullets: [
      'Engineered rolling and differential features including scoring averages, win percentages, point differentials, and schedule factors',
      'Hyperparameters tuned via Bayesian optimisation with time-series cross-validation',
      'calibrated using Platt scaling with threshold optimisation via precision-recall analysis',
      'Evaluated against baseline using accuracy, log loss, Brier score, ROC-AUC, and calibration curves',
    ],
    links: [
      { label: 'Github repo:', href: '', text: 'NBA Win Predictor' },
    ],
  },
  {
    date: '2025',
    title: 'League of Legends Discord Bot',
    summary: 'A Discord bot that retrieves and displays League match history via the Riot Games API',
    bullets: [
      'Fetches summoner data, recent match IDs, and detailed per-match statistics including champion played, KDA, and win/loss outcomes',
    ],
    links: [
      { label: 'Github repo:', href: 'https://github.com/biu6iu/biubiu_bot', text: 'LoL Discord Bot' },
    ],
  },
  {
    date: '2025',
    title: 'Prompt-based Chatroom App',
    summary: 'A chatroom app with prompt-based discussions',
    bullets: [
      'Built using Next.js and Firebase as the database',
      'Features include user authentication, real-time chat, and topic management',
      'Project for CISSA Codebrew 2025 and won 1st place for the "Re-inventing the Wheel" track',
    ],
    links: [
      { label: 'Link:', href: 'https://onlychats2025.vercel.app/', text: 'OnlyChats webpage' },
      { label: 'Github repo:', href: 'https://github.com/biu6iu/OnlyChats_v2.git', text: 'OnlyChats Repo' },
    ],
  },
  {
    date: '2025',
    title: 'AI-powered Driver Assistant',
    summary: 'An AI-powered driver assistant that provides real-time feedback and suggestions',
    bullets: [
      'Aimed to lower driver fatigue and help drivers stay focused whilst driving',
      'Built mainly with Langchain and OpenCV for focus detection',
      'Never fully trialed the app but taught me alot about AI integration in real-world applications',
      'Project for Unihack 2025',
    ],
    links: [
      { label: 'Github repo:', href: 'https://github.com/gzchenny/eepy', text: 'Eepy Repo' },
    ],
  },
  {
    date: '2024',
    title: 'This Website!',
    summary: 'A simple portfolio website',
    bullets: [
      'Built using HTML, CSS, and TypeScript',
    ],
    links: [
      { label: 'Github repo:', href: 'https://github.com/biu6iu/personal-website.git', text: 'My website' },
    ],
  },
];
