# Contributing Guide

## Types of contributions we're looking for
There are many ways you can directly contribute to the guides (in descending order of need):

* Fix editorial inconsistencies or inaccuracies
* Add stories, examples, or anecdotes that help illustrate a point
* Revise language to be more approachable and friendly

Interested in making a contribution? Read on!

## Ground rules & expectations

Before we get started, here are a few things we expect from you (and that you should expect from others):

* Be kind and thoughtful in your conversations around this project. We all come from different backgrounds and projects, which means we likely have different perspectives on "how open source is done." Try to listen to others rather than convince them that your way is correct.
* Open Source Guides are released with a [Contributor Code of Conduct](./CODE_OF_CONDUCT.md). By participating in this project, you agree to abide by its terms.
* If you open a pull request, please ensure that your contribution passes all tests. If there are test failures, you will need to address them before we can merge your contribution.
* When adding content, please consider if it is widely valuable. Please don't add references or links to things you or your employer have created as others will do so if they appreciate it.

## How to contribute

If you'd like to contribute, start by searching through the [issues](https://github.com/4cadia-foundation/4cadia-governance-webapp/issues) and [pull requests](https://github.com/4cadia-foundation/4cadia-governance-webapp/pulls) to see whether someone else has raised a similar idea or question.

If you don't see your idea listed, and you think it fits into the goals of this guide, do one of the following:
* **If your contribution is minor,** such as a typo fix, open a pull request.
* **If your contribution is major,** such as a new guide, start by opening an issue first. That way, other people can weigh in on the discussion before you do any work.

## Pull Request Guidelines

-   The  `master`  branch is just a snapshot of the latest stable release. All development should be done in dedicated branches.  **Do not submit PRs against the  `master`  branch.**
    
-   Checkout a topic branch from the relevant branch, e.g.  `dev`, and merge back against that branch.
    
-   Work in the  `src`  folder and  **DO NOT**  checkin  `dist`  in the commits.
    
-   Make sure  `npm test`  passes.
    
-   If adding a new feature provide a convincing reason to add this feature. Ideally, you should open a suggestion issue first and have it approved before working on it.

-   If fixing bug:
    -   If you are resolving a special issue, add  `(fix #xxxx[,#xxxx])`  (#xxxx is the issue id) in your PR title for a better release log, e.g.  `update entities encoding/decoding (fix #3899)`.
    -   Provide a detailed description of the bug in the PR.
    -   Add appropriate test coverage if applicable.