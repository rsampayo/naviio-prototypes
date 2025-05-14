#!/bin/bash

# Naviio Prototypes Deployment Script
# This script prepares the project for deployment to StaticDeploy or similar services

# Colors for output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

echo -e "${YELLOW}Starting deployment preparation for Naviio Prototypes...${NC}"

# Create a directory for the deployment package
echo -e "${GREEN}Creating deployment directory...${NC}"
mkdir -p deploy

# Copy all necessary files to the deploy directory
echo -e "${GREEN}Copying files to deployment directory...${NC}"
cp -r index.html prototypes README.md deploy/

# Remove any development or temporary files
echo -e "${GREEN}Removing unnecessary files...${NC}"
find deploy -name ".DS_Store" -type f -delete
find deploy -name "*.log" -type f -delete

# Create a timestamp for the deployment
TIMESTAMP=$(date +"%Y%m%d_%H%M%S")
echo -e "${GREEN}Creating deployment archive...${NC}"
cd deploy && zip -r ../naviio_deploy_$TIMESTAMP.zip .
cd ..

# Clean up
echo -e "${GREEN}Cleaning up...${NC}"
rm -rf deploy

echo -e "${GREEN}Deployment package created: naviio_deploy_$TIMESTAMP.zip${NC}"
echo -e "${YELLOW}Upload this ZIP file to your static hosting service.${NC}" 