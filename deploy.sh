#!/bin/bash

# only proceed script when started not by pull request (PR)
if [ $TRAVIS_PULL_REQUEST == "true" ]; then
  echo "this is PR, exiting"
  exit 0
fi

# enable error reporting to the console
set -e

#clone `master' branch of the repository using encrypted GH_TOKEN for authentification
git clone https://${GH_TOKEN}@github.com/tortillaj/cejams.git deploy

# change to deploy directory
cd deploy

# build site 
hugo -t casper

# commit and push generated content to `gh-pages' branch
git config user.email "travis@travis-ci.org"
git config user.name "TravisCI"
git add -A .
git commit -a -m "Travis #$TRAVIS_BUILD_NUMBER"
git subtree push --quiet --prefix=public origin gh-pages > /dev/null 2>&1