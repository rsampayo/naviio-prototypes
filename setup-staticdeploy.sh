#!/bin/bash

# Setup script for StaticDeploy
# This script helps set up a local StaticDeploy instance for testing

# Colors for output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

echo -e "${YELLOW}StaticDeploy Setup Script${NC}"
echo -e "${YELLOW}=======================${NC}"
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo -e "${RED}Error: Node.js is required but not installed.${NC}"
    echo -e "${YELLOW}Please install Node.js from https://nodejs.org and try again.${NC}"
    exit 1
fi

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo -e "${RED}Error: npm is required but not installed.${NC}"
    echo -e "${YELLOW}Please install npm and try again.${NC}"
    exit 1
fi

# Install StaticDeploy CLI globally if not already installed
if ! command -v staticdeploy &> /dev/null; then
    echo -e "${YELLOW}Installing StaticDeploy CLI globally...${NC}"
    npm install -g @staticdeploy/cli
    
    if [ $? -ne 0 ]; then
        echo -e "${RED}Failed to install StaticDeploy CLI.${NC}"
        echo -e "${YELLOW}You may need to run this command with sudo:${NC}"
        echo -e "${YELLOW}sudo npm install -g @staticdeploy/cli${NC}"
        exit 1
    fi
else
    echo -e "${GREEN}StaticDeploy CLI is already installed.${NC}"
fi

echo ""
echo -e "${GREEN}StaticDeploy CLI installed successfully!${NC}"
echo ""
echo -e "${YELLOW}Starting a local StaticDeploy instance with in-memory storage...${NC}"

# Create a new terminal window/tab to run StaticDeploy
if [[ "$OSTYPE" == "darwin"* ]]; then
    # macOS
    osascript -e 'tell app "Terminal" to do script "cd '$PWD' && staticdeploy start --memory-storage"'
    echo -e "${GREEN}Started StaticDeploy in a new terminal window.${NC}"
elif [[ "$OSTYPE" == "linux-gnu"* ]]; then
    # Linux
    if command -v gnome-terminal &> /dev/null; then
        gnome-terminal -- bash -c "cd '$PWD' && staticdeploy start --memory-storage; exec bash"
        echo -e "${GREEN}Started StaticDeploy in a new terminal window.${NC}"
    else
        echo -e "${YELLOW}Cannot open a new terminal window automatically.${NC}"
        echo -e "${YELLOW}Please run this command in a new terminal:${NC}"
        echo -e "${GREEN}cd '$PWD' && staticdeploy start --memory-storage${NC}"
    fi
else
    # Other OS
    echo -e "${YELLOW}Cannot open a new terminal window automatically.${NC}"
    echo -e "${YELLOW}Please run this command in a new terminal:${NC}"
    echo -e "${GREEN}cd '$PWD' && staticdeploy start --memory-storage${NC}"
fi

echo ""
echo -e "${YELLOW}Next steps:${NC}"
echo -e "1. Once StaticDeploy is running, access the Management Console at http://localhost:3000/admin"
echo -e "2. Update your staticdeploy-config.json to use localhost instead of public.ka-ve.io:"
echo -e "${GREEN}   \"hosts\": [\"localhost:3000\"],${NC}"
echo -e "${GREEN}   \"configuration\": {${NC}"
echo -e "${GREEN}     \"BASE_URL\": \"/\",${NC}"
echo -e "${GREEN}     \"API_URL\": \"http://localhost:3000/api\",${NC}"
echo -e "${GREEN}     \"ENVIRONMENT\": \"development\"${NC}"
echo -e "${GREEN}   }${NC}"
echo -e "3. Run the deployment script: ./deploy-to-ka-ve.sh"
echo ""
echo -e "${YELLOW}For more information, visit: https://github.com/staticdeploy/staticdeploy${NC}" 