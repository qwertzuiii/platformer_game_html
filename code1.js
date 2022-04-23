gdjs.Main_32MenuCode = {};
gdjs.Main_32MenuCode.GDNewTextObjects1= [];
gdjs.Main_32MenuCode.GDNewTextObjects2= [];
gdjs.Main_32MenuCode.GDMainObjects1= [];
gdjs.Main_32MenuCode.GDMainObjects2= [];

gdjs.Main_32MenuCode.conditionTrue_0 = {val:false};
gdjs.Main_32MenuCode.condition0IsTrue_0 = {val:false};
gdjs.Main_32MenuCode.condition1IsTrue_0 = {val:false};


gdjs.Main_32MenuCode.eventsList0 = function(runtimeScene) {

{


gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
{
gdjs.Main_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Main_32MenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.storage.readNumberFromJSONFile("Config", "Volume", runtimeScene, runtimeScene.getVariables().getFromIndex(0));
}}

}


{


gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
{
gdjs.Main_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 123;
}if (gdjs.Main_32MenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.storage.writeNumberInJSONFile("Config", "Volume", 50);
}{gdjs.evtTools.storage.readNumberFromJSONFile("Config", "Volume", runtimeScene, runtimeScene.getVariables().getFromIndex(0));
}}

}


{


gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
{
gdjs.Main_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Return");
}if (gdjs.Main_32MenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Untitled scene", false);
}}

}


};

gdjs.Main_32MenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Main_32MenuCode.GDNewTextObjects1.length = 0;
gdjs.Main_32MenuCode.GDNewTextObjects2.length = 0;
gdjs.Main_32MenuCode.GDMainObjects1.length = 0;
gdjs.Main_32MenuCode.GDMainObjects2.length = 0;

gdjs.Main_32MenuCode.eventsList0(runtimeScene);
return;

}

gdjs['Main_32MenuCode'] = gdjs.Main_32MenuCode;
