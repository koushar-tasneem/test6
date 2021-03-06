#!/usr/bin/env node
/**
 * Copyright 2018 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Docusaurus gets confused by empty HTML comment tags in our Markdown.
   These are generated by API Extractor but do not affect the final output,
   so to avoid Docusaurus errors we strip them out before generating the website.
 **/
const glob = require('glob');
const fs = require('fs');

// look for all .md files in the given location.
const files = glob.sync(`./my-website/docs/*.md`);

for (const file of files) {
  const content = fs.readFileSync(file, 'utf8');
  const updated = content.replace(/<!-- -->/g, '');
  fs.writeFileSync(file, updated);
}
