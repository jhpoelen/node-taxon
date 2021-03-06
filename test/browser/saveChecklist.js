var test = require('tape');
var taxon = require('../../');

var token = '[your eol.org api token here]';

test.skip('create a collection', function(t) {
  t.plan(1);
  taxon.saveAsCollection(function(collectionId) { t.ok(collectionId > 0); }, token, ['1','918802']);
});


test.skip('create a collection with duplicates', function(t) {
  t.plan(1);
  taxon.saveAsCollection(function(collectionId) { t.ok(collectionId > 0); }, token, ['1','1']);
});

test.skip('create a big collection', function(t) {
  t.plan(1);
  var ids = [915104,1051309,1051993,1050872,1049431,1049439,913186,1052548,1052079,1052072,1049471,922655,1046720,1177531,1052728,1052768,1049549,1048993,916843,918920,1049516,1048953,1051322,1053023,1048975,1049164,1049046,1049581,1049760,1048978,1048976,1048977,1048966,1048973,917151,1051989,1050919,915655,1049569,1049773,915489,917154,1050834,918912,918803,1052592,1049378,1049563,1049475,1049366,1049762,1049002,1048964,1047342,1047043,1048566,1177539,922253,922241,1051310,1177536,10964109,12120713,1050633,1052056,1052017,922693,1052536,1178577,918159,919946,1178497,922653,1052763,921034,1052765,921032,1177485,1177464,1049187,1049166,1049123,1049085,1049024,1050134,1049549,1048731,1049546,1049378,1049551,1049565,1049547,1049474,1049518,1049630,1049333,1049365,1049342,1049606,1049342,1045998,1048999,914528,914551,1047918,1048951,1048958,1048943,1049046];
  taxon.saveAsCollection(function(collectionId, resp, reqBody) { 
    console.log(JSON.stringify(resp));
    console.log(reqBody);
    t.ok(collectionId > 0); 
  }, token, ids);
});

test('create a collection invalid token', function(t) {
  t.plan(1);
  var token = 'nothing';
  taxon.saveAsCollection(function(collectionId) { t.notOk(collectionId > 0); }, token, [1]);
});

