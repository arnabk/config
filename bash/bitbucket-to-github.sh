#!/bin/bash

BITBUCKET_USER=akarmakar
BITBUCKET_PASS="password"
GITHUB_USER=arnabk
GITHUB_PASS="password"

REPOSITORY_NAME=$1
git clone https://ranartecllc@bitbucket.org/$BITBUCKET_USER/$REPOSITORY_NAME.git
#send $BITBUCKET_USER
#send $BITBUCKET_PASS
cd $REPOSITORY_NAME
git remote add upstream https://github.com/$GITHUB_USER/$REPOSITORY_NAME
git push upstream master
#send $GITHUB_USER
#send $GITHUB_PASS
git push --tags upstream
#send $GITHUB_USER
#send $GITHUB_PASS
cd ..
rm -fR $REPOSITORY_NAME


# REPOSITORY_NAME=$1
# git clone git@bitbucket.org:$BITBUCKET_USER/$REPOSITORY_NAME.git
# cd $REPOSITORY_NAME
# git remote add upstream git@github.com:$GITHUB_USER/$REPOSITORY_NAME.git
# git push upstream master
# git push --tags upstream
# cd ..
# rm -fR $REPOSITORY_NAME