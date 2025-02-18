# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [1.1.12]
### Added
- This CHANGELOG file to serve as an evolving example of a standardized open source project CHANGELOG.
- Support for concurrent customer sessions and an agent session. Concurrent agent sessions are unsupported in [Streams](https://github.com/amazon-connect/amazon-connect-streams) and remain unsupported in ChatJS.
- Ability to configure a customized logger and other logging updates.

### Changed
- Upgrade babel, jest, and webpack-dev-server dependencies.
- Minor code refactorings.

### Fixed
- Fix ChatJS connections breaking when [Streams](https://github.com/amazon-connect/amazon-connect-streams) is terminated and re-initialized.
- Improve code coverage.

## [1.1.11] - 2022-05-20
### Changed
- Upgrade async, minimist, node-forge dependencies.

## [1.1.10] - 2022-03-10
### Changed
- Bumped webpack, babel, eslint, and jest

[Unreleased]: https://github.com/amazon-connect/amazon-connect-chatjs/compare/4378177e5d66b0615fe8435d9ed352199b8b7a9d...HEAD
[1.1.11]: https://github.com/amazon-connect/amazon-connect-chatjs/compare/b1e631b105bd6c6f8535cfe172678b517f5e0353...4378177e5d66b0615fe8435d9ed352199b8b7a9d
[1.1.10]: https://github.com/amazon-connect/amazon-connect-chatjs/compare/9ba35f8e63a8e6a86fa3b3128a0d91ca7e841e55...b1e631b105bd6c6f8535cfe172678b517f5e0353
