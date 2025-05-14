#!/bin/bash

# Deploy script for StaticDeploy on public.ka-ve.io
# This script builds the bundle and deploys it to the StaticDeploy instance

# Colors for output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

echo -e "${YELLOW}Starting deployment to public.ka-ve.io...${NC}"

# Check if StaticDeploy API is accessible
if ! curl -s --head https://public.ka-ve.io/api/health | grep "200" > /dev/null; then
  echo -e "${RED}Error: Cannot connect to StaticDeploy API at public.ka-ve.io${NC}"
  echo -e "${YELLOW}Please make sure the StaticDeploy instance is running and accessible${NC}"
  exit 1
fi

# Install dependencies if needed
if [ ! -d "node_modules" ]; then
  echo -e "${YELLOW}Installing dependencies...${NC}"
  npm install
fi

# Build the bundle
echo -e "${GREEN}Building bundle...${NC}"
npm run build

# Set StaticDeploy API URL if not already set
if [ -z "$STATICDEPLOY_API_URL" ]; then
  export STATICDEPLOY_API_URL="https://public.ka-ve.io/api"
  echo -e "${YELLOW}Setting STATICDEPLOY_API_URL to $STATICDEPLOY_API_URL${NC}"
fi

# Set StaticDeploy API token if not already set (or prompt for it)
if [ -z "$STATICDEPLOY_API_TOKEN" ]; then
  echo -e "${YELLOW}StaticDeploy API token not found in environment${NC}"
  read -p "Please enter your StaticDeploy API token: " STATICDEPLOY_API_TOKEN
  export STATICDEPLOY_API_TOKEN="$STATICDEPLOY_API_TOKEN"
fi

# Deploy to StaticDeploy
echo -e "${GREEN}Deploying to StaticDeploy...${NC}"
npm run deploy

# Check if deployment was successful
if [ $? -eq 0 ]; then
  echo -e "${GREEN}Deployment successful!${NC}"
  echo -e "${YELLOW}Your site should now be available at https://public.ka-ve.io/${NC}"
else
  echo -e "${RED}Deployment failed. Please check the error messages above.${NC}"
  exit 1
fi

echo -e "${GREEN}Done!${NC}" 