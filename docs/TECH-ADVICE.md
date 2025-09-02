
# Technical Advice & Best Practices

This document summarizes key technical choices and best practices for the nadscab project.

## General Principles
- Keep all documentation and code in English
- Use clear, descriptive commit messages
- Prefer open standards and widely used libraries
- Avoid unnecessary complexity

## Frontend (React/Vite)
- Use functional components and hooks
- Organize code by feature (e.g., pages, components)
- Use ESLint and Prettier for code quality
- Write unit tests for critical components
- Optimize assets for performance

## Backend (FastAPI)
- Structure endpoints clearly and document with OpenAPI
- Validate all input data
- Use environment variables for secrets/config
- Log errors and important events
- Write unit tests for API endpoints

## Security
- Never commit sensitive data (API keys, passwords)
- Review file and directory permissions
- Use HTTPS in production

## CI/CD
- Use GitHub Actions for automated testing and linting
- Keep workflows simple and fast

## Collaboration
- Document all major decisions in the docs folder
- Encourage code reviews and feedback

## Notes
- Docker support is postponed
- Feedback and improvements are welcome!
