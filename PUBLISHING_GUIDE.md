# Publishing to NPM for NPX Usage

## Prerequisites

1. **Create an npm account** (if you don't have one):
   - Go to https://www.npmjs.com/signup
   - Create your account

2. **Login to npm** from terminal:
   ```bash
   npm login
   ```
   Enter your username, password, and email

## Publishing Steps

### 1. Verify Package Name Availability
Check if `twse-mcp` is available:
```bash
npm view twse-mcp
```
If it returns "404 Not Found", the name is available.

### 2. Build the Project
```bash
npm run build
```

### 3. Test Locally (Optional)
Create a test package:
```bash
npm pack
```
This creates `twse-mcp-1.1.0.tgz`

Test it locally:
```bash
npm install -g ./twse-mcp-1.1.0.tgz
twse-mcp
```

### 4. Publish to NPM
```bash
npm publish
```

If the package name is taken, you can:
- Use a scoped package: `@yourusername/twse-mcp`
- Choose a different name

For scoped package, update package.json:
```json
{
  "name": "@yourusername/twse-mcp",
  ...
}
```

Then publish with public access:
```bash
npm publish --access public
```

### 5. Verify NPX Works
After publishing (wait 1-2 minutes for npm to update):
```bash
npx twse-mcp
```

Or if using scoped package:
```bash
npx @yourusername/twse-mcp
```

## Alternative: GitHub Package Registry

If you don't want to use npm public registry, you can use GitHub Packages:

### 1. Update package.json:
```json
{
  "name": "@pyang2045/twse-mcp",
  "publishConfig": {
    "registry": "https://npm.pkg.github.com"
  }
}
```

### 2. Create GitHub Personal Access Token:
- Go to GitHub Settings → Developer settings → Personal access tokens
- Create token with `write:packages` permission

### 3. Login to GitHub registry:
```bash
npm login --registry=https://npm.pkg.github.com
Username: YOUR_GITHUB_USERNAME
Password: YOUR_GITHUB_TOKEN
Email: YOUR_EMAIL
```

### 4. Publish:
```bash
npm publish
```

### 5. Use with npx:
```bash
npx @pyang2045/twse-mcp
```

## Quick Publish Commands

For standard npm registry:
```bash
# First time setup
npm login

# Every time you want to publish
npm run build
npm version patch  # or minor/major
npm publish
git push --tags

# Test it
npx twse-mcp
```

## Troubleshooting

1. **Name already taken**: Use scoped package `@username/package-name`
2. **Permission denied**: Make sure you're logged in with `npm whoami`
3. **Files missing**: Check `.npmignore` file
4. **Binary not working**: Ensure `bin` field in package.json is correct
5. **TypeScript errors**: Run `npm run build` before publishing

## Version Management

Before publishing updates:
```bash
# Patch version (1.1.0 → 1.1.1)
npm version patch

# Minor version (1.1.0 → 1.2.0)
npm version minor

# Major version (1.1.0 → 2.0.0)
npm version major
```

This automatically updates package.json and creates a git tag.