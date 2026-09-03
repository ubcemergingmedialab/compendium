# GitHub Issues and Commit Workflow

This document describes how to use GitHub Issues effectively and leverage commit message keywords to automatically close issues when code is merged.

## Overview

GitHub provides automatic issue closing functionality through commit messages and pull requests. When you use specific keywords in your commit messages, GitHub will automatically close the referenced issues when the commit is merged to the default branch.

## Auto-Closing Keywords

GitHub recognizes the following keywords to automatically close issues:

### Primary Keywords
- `close`
- `closes`
- `closed`
- `fix`
- `fixes`
- `fixed`
- `resolve`
- `resolves`
- `resolved`

### Usage Examples

```bash
# Single issue
git commit -m "Fix navigation bug - closes #42"

# Multiple issues
git commit -m "Add user authentication - fixes #15, fixes #23, closes #8"

# Different keywords
git commit -m "Resolve database connection issue - resolves #156"
```

## Commit Message Format

### Basic Format

```
<type>: <short description> - <keyword> #<issue-number>

Optional longer description explaining the changes
and why they were necessary.
```

### Examples

**Good commit messages:**

```bash
# Feature addition
git commit -m "feat: Add technology card filtering - closes #45"

# Bug fix
git commit -m "fix: Correct API endpoint URL - fixes #78"

# Multiple issues
git commit -m "refactor: Improve component structure - closes #23, closes #24"

# With description
git commit -m "feat: Implement dark mode toggle - closes #67

Added theme context and toggle button in header.
Persists user preference to localStorage."
```

**Bad commit messages:**
```bash
# Too vague
git commit -m "fixed stuff"

# No issue reference
git commit -m "Updated the header component"

# Wrong keyword format
git commit -m "closes: #45"  # keyword should be in description, not at start
```

## Commit Types

Use these prefixes to categorize your commits:

| Type | Description | Example |
|------|-------------|---------|
| `feat` | New feature | `feat: Add search functionality - closes #12` |
| `fix` | Bug fix | `fix: Resolve mobile layout issue - fixes #34` |
| `docs` | Documentation | `docs: Update deployment guide - closes #56` |
| `style` | Code style/formatting | `style: Format component files - closes #78` |
| `refactor` | Code refactoring | `refactor: Simplify state management - closes #91` |
| `test` | Adding/updating tests | `test: Add unit tests for utils - closes #23` |
| `chore` | Maintenance tasks | `chore: Update dependencies - closes #45` |
| `perf` | Performance improvements | `perf: Optimize image loading - fixes #67` |

## Issue Linking Without Closing

Sometimes you want to **reference** an issue without closing it:

```bash
# Reference without closing
git commit -m "feat: Add initial search UI - related to #42"
git commit -m "docs: Document API changes - see #78"
git commit -m "refactor: Extract utility functions - part of #156"
```

These will link to the issue in GitHub but won't close it automatically.

## Working with Pull Requests

When working with pull requests, you can also use keywords in:

### PR Title
```
Add dark mode support - closes #67
```

### PR Description
```markdown
## Changes
- Added theme context provider
- Implemented toggle button
- Added localStorage persistence

Closes #67
Fixes #68
```

### PR Commits
Each commit in the PR can reference different issues:
```bash
git commit -m "feat: Add theme context - part of #67"
git commit -m "feat: Add toggle button - closes #67"
git commit -m "fix: Persist theme choice - fixes #68"
```

## Best Practices

### 1. One Issue Per Commit (When Possible)

```bash
# Good - focused commit
git commit -m "fix: Correct mobile navigation bug - fixes #42"

# Less ideal - multiple unrelated issues
git commit -m "Fix navigation and update docs - fixes #42, closes #78"
```

### 2. Be Specific in Descriptions

```bash
# Good - explains what and why
git commit -m "fix: Correct viewport calculation on mobile Safari - fixes #42

The previous calculation didn't account for Safari's dynamic toolbar.
Now using window.visualViewport for accurate measurements."

# Not good - vague
git commit -m "fixed bug - fixes #42"
```

### 3. Reference Issues Early and Often

```bash
# During development
git commit -m "feat: Add search input component - part of #45"
git commit -m "feat: Implement search logic - part of #45"

# Final implementation
git commit -m "feat: Complete search functionality - closes #45"
```

### 4. Close Related Issues Together

```bash
git commit -m "feat: Complete user authentication system - closes #12, closes #13, closes #14

Implements login, registration, and password reset.
All authentication flows have been tested and documented."
```

## GitHub Issue Workflow

### Step 1: Create an Issue

1. Go to the repository's Issues tab
2. Click "New issue"
3. Provide a clear title and description
4. Add labels (bug, enhancement, documentation, etc.)
5. Assign to yourself or team member
6. Note the issue number (e.g., #42)

### Step 2: Create a Branch (Optional)

```bash
# Create feature branch referencing issue
git checkout -b feature/add-search-45

# Or for bug fixes
git checkout -b fix/mobile-nav-42
```

### Step 3: Make Changes and Commit

```bash
# Make your changes
# ...

# Commit with issue reference
git add .
git commit -m "feat: Add search functionality - closes #45"
```

### Step 4: Push and Merge

```bash
# Push to remote
git push origin main

# Or push branch and create PR
git push origin feature/add-search-45
```

When merged to `main`, GitHub will automatically close issue #45.

## Multiple Repository References

You can reference issues in other repositories:

```bash
# Reference issue in another repo
git commit -m "feat: Add integration - closes ubcemergingmedialab/other-repo#42"

# Reference in same organization
git commit -m "fix: Update API calls - fixes other-repo#78"
```

## Trello Integration (Optional)

If you're using Trello alongside GitHub:

### Link Trello Card to GitHub Issue

1. In Trello card, add a link to the GitHub issue in the description:
   ```
   GitHub Issue: https://github.com/ubcemergingmedialab/compendium/issues/42
   ```

2. In GitHub issue, reference the Trello card URL:
   ```markdown
   Related Trello card: https://trello.com/c/abc123/card-name
   ```

### Workflow with Both Tools

```bash
# 1. Create Trello card for task
# 2. Create GitHub issue with link to Trello
# 3. Commit with GitHub issue reference
git commit -m "feat: Implement feature - closes #42"

# 4. When merged, GitHub issue closes automatically
# 5. Manually move Trello card to "Done"
```

## Checking Issue Status

### View Linked Commits

1. Open the issue on GitHub
2. Scroll down to see "Linked pull requests" and commit references
3. Click commits to see the changes

### Verify Auto-Close

After pushing to `main`:
1. Go to the issue page
2. You should see a comment: "closed this in [commit]"
3. Issue status changes to "Closed"

## Troubleshooting

### Issue Didn't Close

**Common causes:**
1. ❌ Keyword not recognized (e.g., "closing" instead of "closes")
2. ❌ Wrong branch (must merge to default branch, usually `main`)
3. ❌ Typo in issue number
4. ❌ Commit not pushed yet

**Solutions:**
```bash
# Manually close with reference
# Edit the issue and add a comment:
"Closed via commit abc123"
```

### Wrong Issue Closed

If you accidentally close the wrong issue:
1. Go to the closed issue
2. Click "Reopen issue" button
3. Add a comment explaining the mistake

### Reopening Closed Issues

Issues can be reopened if needed:
1. Navigate to the closed issue
2. Click "Reopen issue"
3. Update the issue with new context

## Quick Reference

### Cheat Sheet

```bash
# Close single issue
git commit -m "fix: description - fixes #42"

# Close multiple issues  
git commit -m "feat: description - closes #23, closes #24"

# Reference without closing
git commit -m "feat: description - related to #42"

# Cross-repository reference
git commit -m "fix: description - fixes owner/repo#42"

# With detailed description
git commit -m "feat: Add feature - closes #45

Detailed explanation of changes and reasoning."
```

### Common Keywords Quick List

- ✅ `closes #42` - Will close issue #42
- ✅ `fixes #42` - Will close issue #42
- ✅ `resolves #42` - Will close issue #42
- ✅ `closes #42, closes #43` - Will close both issues
- ❌ `closing #42` - Won't auto-close (wrong keyword)
- ❌ `close: #42` - Won't auto-close (wrong format)
- ⚠️ `related to #42` - Links but doesn't close

## Examples from EML Projects

### IMLE Project
```bash
git commit -m "feat: Add atomic bonding module - closes #12"
git commit -m "fix: Correct unit cell calculation - fixes #34"
git commit -m "docs: Update developer guide - closes #56"
```

### EPISODE Project
```bash
git commit -m "feat: Implement QR scanning - closes #23"
git commit -m "fix: Resolve AWS Lambda timeout - fixes #45"
git commit -m "refactor: Optimize avatar rendering - closes #67"
```

### Compendium Project
```bash
git commit -m "feat: Add 16 new technology cards - closes #8"
git commit -m "fix: Correct GitHub Pages base path - fixes #15"
git commit -m "docs: Add deployment guide - closes #22"
```

## Additional Resources

- [GitHub Documentation: Linking to Issues](https://docs.github.com/en/issues/tracking-your-work-with-issues/linking-a-pull-request-to-an-issue)
- [GitHub Documentation: Closing Issues](https://docs.github.com/en/issues/tracking-your-work-with-issues/closing-an-issue)
- [Conventional Commits](https://www.conventionalcommits.org/)
- [Git Commit Best Practices](https://git-scm.com/book/en/v2/Distributed-Git-Contributing-to-a-Project)

## Summary

**Remember:**
1. Use keywords: `closes`, `fixes`, or `resolves`
2. Format: `description - closes #issue-number`
3. Must merge to default branch (`main`)
4. Can reference multiple issues in one commit
5. Use descriptive commit messages
6. Add commit type prefixes for clarity

---

**Last Updated:** September 2, 2026  
**Maintained by:** EML Development Team
