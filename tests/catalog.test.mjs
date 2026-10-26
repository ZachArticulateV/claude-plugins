import {readFileSync} from 'node:fs';
import {test} from 'node:test';
import assert from 'node:assert/strict';
const read=path=>JSON.parse(readFileSync(new URL('../'+path,import.meta.url),'utf8'));
test('both hosts get Compound Memory from the same current branch',()=>{
  const claude=read('.claude-plugin/marketplace.json');
  const codex=read('.agents/plugins/marketplace.json');
  assert.equal(claude.name,'zacharticulatev');
  assert.equal(codex.name,claude.name);
  const a=claude.plugins.find(p=>p.name==='compound-memory');
  const b=codex.plugins.find(p=>p.name==='compound-memory');
  assert.deepEqual(a.source,{source:'url',url:'https://github.com/ZachArticulateV/compound-memory.git',ref:'main'});
  assert.deepEqual(b.source,a.source);
  assert.equal(a.version,undefined,'The plugin manifest owns its version');
  assert.deepEqual(b.policy,{installation:'AVAILABLE',authentication:'ON_INSTALL'});
  assert.equal(b.category,'Productivity');
});
test('the separate designer entry remains available in Claude',()=>{
  const entry=read('.claude-plugin/marketplace.json').plugins.find(p=>p.name==='designer-pro-and-seo');
  assert.deepEqual(entry.source,{source:'github',repo:'ZachArticulateV/designer-pro-and-seo'});
});
