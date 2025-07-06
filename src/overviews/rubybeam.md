Rubybeam is an AI tool that automates the sponsorship outreach process for influencer agencies. It identifies relevant brands for each YouTuber and generates personalized pitch emails at scale. The system reduces manual work, improves targeting accuracy, and helps agencies close more deals, faster.

The core workflow involves four automated steps:

1. Fetching brand data from multiple sources
2. Analyzing influencer content to understand audience and niche
3. Matching brands using category alignment and audience fit
4. Generating emails with contextual personalization

The entire process is orchestrated through an AI agent framework powered by Python and OpenAI's language models. I built the backend in Node.js with MongoDB, exposed endpoints via REST APIs, and used React for the frontend. The app is deployed on AWS and supports high-throughput batch processing of outreach campaigns.

I designed and implemented the system architecture, built internal tools for debugging and QA, and iterated the matching logic based on feedback from real agencies during pilot testing. 