var inputData = JSON.parse(
);
var a = {}, rowname, k_key;
for(var k = 0; k < Object.keys(inputData).length; k++) {
	k_key = Object.keys(inputData)[k];
  for(var i = 0; i < inputData[k_key].length; i++){
    rowname = inputData[k_key][i]._row;
    delete inputData[k_key][i]["_row"];
    a[rowname] = inputData[k_key][i];
  }
  inputData[k_key] = {};
  Object.assign(inputData[k_key], a);
  a = {};
}