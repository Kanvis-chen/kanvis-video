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

## Mandatory pre-publication check

Before every public push or release:

1. Review `git status`, the staged diff, tracked filenames, generated files, screenshots, media metadata, and local runtime directories.
2. Run `npm run release:audit` from the repository root.
3. Run a full-history scanner such as `gitleaks git --redact .`; scanning only the working tree is not sufficient.
4. Confirm GitHub Secret Scanning and Push Protection are enabled and have no unresolved alerts.
5. Confirm examples contain no real customer data, private media, local usernames, absolute computer paths, cookies, sessions, QR codes, voice samples, or account identifiers.

Kanvis Studio writes local state to `.visualhyper/`. The HTTPS App bridge state can contain an absolute project path and a capability URL. Treat that URL like a password: do not paste it into issues, screenshots, logs, or documentation, and stop the bridge when it is no longer needed.

If a credential was ever committed, rotate or revoke it first, then remove it from every affected Git object. Deleting it from the latest file alone does not make the repository safe.

This project coordinates third-party tools. Provider vulnerabilities and account incidents should also be reported through the provider's official security channel.
