#!/bin/bash

echo "Building the project..."
npm install
npm run build

echo "Testing the MCP server..."
echo '{"jsonrpc":"2.0","method":"initialize","params":{"protocolVersion":"0.1.0","capabilities":{},"clientInfo":{"name":"test-client","version":"1.0.0"}},"id":1}' | node dist/index.js

echo ""
echo "If you see a JSON response, the server is working!"
echo ""
echo "To use with Claude Desktop, add this to your config:"
echo "Location: ~/Library/Application Support/Claude/claude_desktop_config.json"
echo ""
cat examples/claude_desktop_config.json