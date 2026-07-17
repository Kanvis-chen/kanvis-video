# Security Policy

## Supported version

Security fixes currently target the latest release on the default branch.

## Reporting a vulnerability

Do not open a public issue for leaked credentials, authorization bypasses, private media exposure, unsafe command execution, or identity/consent vulnerabilities.

Use GitHub's private vulnerability reporting for this repository. Include reproduction steps, affected files, expected impact, and a suggested mitigation when available. Do not include real API keys, signed URLs, private portraits, or voice samples in the report.

## Secret and media handling

- Load provider credentials from environment variables.
- Redact authorization headers and signed URLs from logs and reports.
- Keep real input media and provider job state outside the repository.
- Treat generated voice and likeness data as sensitive even when a provider returns a public-looking URL.
- Revoke exposed credentials immediately and remove them from Git history before publishing a replacement.

This project coordinates third-party tools. Provider vulnerabilities and account incidents should also be reported through the provider's official security channel.
