gdjs.SHOPCode = {};
gdjs.SHOPCode.GDNewTextObjects1= [];
gdjs.SHOPCode.GDNewTextObjects2= [];
gdjs.SHOPCode.GDbuy_95jumpx2Objects1= [];
gdjs.SHOPCode.GDbuy_95jumpx2Objects2= [];
gdjs.SHOPCode.GDLevelStatusObjects1= [];
gdjs.SHOPCode.GDLevelStatusObjects2= [];
gdjs.SHOPCode.GDCoinsNumberObjects1= [];
gdjs.SHOPCode.GDCoinsNumberObjects2= [];
gdjs.SHOPCode.GDprice_95jumpx2Objects1= [];
gdjs.SHOPCode.GDprice_95jumpx2Objects2= [];
gdjs.SHOPCode.GDbuttonObjects1= [];
gdjs.SHOPCode.GDbuttonObjects2= [];
gdjs.SHOPCode.GDbackbuttontextObjects1= [];
gdjs.SHOPCode.GDbackbuttontextObjects2= [];

gdjs.SHOPCode.conditionTrue_0 = {val:false};
gdjs.SHOPCode.condition0IsTrue_0 = {val:false};
gdjs.SHOPCode.condition1IsTrue_0 = {val:false};
gdjs.SHOPCode.condition2IsTrue_0 = {val:false};
gdjs.SHOPCode.condition3IsTrue_0 = {val:false};


gdjs.SHOPCode.mapOfGDgdjs_46SHOPCode_46GDbuy_9595jumpx2Objects1Objects = Hashtable.newFrom({"buy_jumpx2": gdjs.SHOPCode.GDbuy_95jumpx2Objects1});gdjs.SHOPCode.eventsList0 = function(runtimeScene) {

{

/* Reuse gdjs.SHOPCode.GDbuy_95jumpx2Objects1 */

gdjs.SHOPCode.condition0IsTrue_0.val = false;
gdjs.SHOPCode.condition1IsTrue_0.val = false;
gdjs.SHOPCode.condition2IsTrue_0.val = false;
{
gdjs.SHOPCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.SHOPCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.SHOPCode.GDbuy_95jumpx2Objects1.length;i<l;++i) {
    if ( gdjs.SHOPCode.GDbuy_95jumpx2Objects1[i].getVariableNumber(gdjs.SHOPCode.GDbuy_95jumpx2Objects1[i].getVariables().getFromIndex(0)) == 0 ) {
        gdjs.SHOPCode.condition1IsTrue_0.val = true;
        gdjs.SHOPCode.GDbuy_95jumpx2Objects1[k] = gdjs.SHOPCode.GDbuy_95jumpx2Objects1[i];
        ++k;
    }
}
gdjs.SHOPCode.GDbuy_95jumpx2Objects1.length = k;}if ( gdjs.SHOPCode.condition1IsTrue_0.val ) {
{
gdjs.SHOPCode.condition2IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) >= 20;
}}
}
if (gdjs.SHOPCode.condition2IsTrue_0.val) {
/* Reuse gdjs.SHOPCode.GDbuy_95jumpx2Objects1 */
{for(var i = 0, len = gdjs.SHOPCode.GDbuy_95jumpx2Objects1.length ;i < len;++i) {
    gdjs.SHOPCode.GDbuy_95jumpx2Objects1[i].setColor("122;0;0");
}
}{for(var i = 0, len = gdjs.SHOPCode.GDbuy_95jumpx2Objects1.length ;i < len;++i) {
    gdjs.SHOPCode.GDbuy_95jumpx2Objects1[i].returnVariable(gdjs.SHOPCode.GDbuy_95jumpx2Objects1[i].getVariables().getFromIndex(0)).setNumber(1);
}
}{gdjs.evtTools.storage.writeNumberInJSONFile("Shop", "x2jump", 1);
}}

}


};gdjs.SHOPCode.eventsList1 = function(runtimeScene) {

{


gdjs.SHOPCode.condition0IsTrue_0.val = false;
{
gdjs.SHOPCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.SHOPCode.condition0IsTrue_0.val) {
{gdjs.evtTools.storage.readStringFromJSONFile("Shop", "getlevel", runtimeScene, runtimeScene.getVariables().getFromIndex(0));
}{gdjs.evtTools.storage.readStringFromJSONFile("Shop", "c", runtimeScene, runtimeScene.getVariables().getFromIndex(1));
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("CoinsNumber"), gdjs.SHOPCode.GDCoinsNumberObjects1);
gdjs.copyArray(runtimeScene.getObjects("LevelStatus"), gdjs.SHOPCode.GDLevelStatusObjects1);
{gdjs.evtTools.storage.readStringFromJSONFile("Shop", "getlevel", runtimeScene, runtimeScene.getVariables().getFromIndex(0));
}{gdjs.evtTools.storage.readNumberFromJSONFile("Shop", "c", runtimeScene, runtimeScene.getVariables().getFromIndex(1));
}{for(var i = 0, len = gdjs.SHOPCode.GDLevelStatusObjects1.length ;i < len;++i) {
    gdjs.SHOPCode.GDLevelStatusObjects1[i].setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().getFromIndex(0)));
}
}{for(var i = 0, len = gdjs.SHOPCode.GDCoinsNumberObjects1.length ;i < len;++i) {
    gdjs.SHOPCode.GDCoinsNumberObjects1[i].setString("COINS:  " + gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().getFromIndex(1)));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("buy_jumpx2"), gdjs.SHOPCode.GDbuy_95jumpx2Objects1);

gdjs.SHOPCode.condition0IsTrue_0.val = false;
{
gdjs.SHOPCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.SHOPCode.mapOfGDgdjs_46SHOPCode_46GDbuy_9595jumpx2Objects1Objects, runtimeScene, true, false);
}if (gdjs.SHOPCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.SHOPCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


gdjs.SHOPCode.condition0IsTrue_0.val = false;
{
gdjs.SHOPCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Return");
}if (gdjs.SHOPCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}}

}


};

gdjs.SHOPCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.SHOPCode.GDNewTextObjects1.length = 0;
gdjs.SHOPCode.GDNewTextObjects2.length = 0;
gdjs.SHOPCode.GDbuy_95jumpx2Objects1.length = 0;
gdjs.SHOPCode.GDbuy_95jumpx2Objects2.length = 0;
gdjs.SHOPCode.GDLevelStatusObjects1.length = 0;
gdjs.SHOPCode.GDLevelStatusObjects2.length = 0;
gdjs.SHOPCode.GDCoinsNumberObjects1.length = 0;
gdjs.SHOPCode.GDCoinsNumberObjects2.length = 0;
gdjs.SHOPCode.GDprice_95jumpx2Objects1.length = 0;
gdjs.SHOPCode.GDprice_95jumpx2Objects2.length = 0;
gdjs.SHOPCode.GDbuttonObjects1.length = 0;
gdjs.SHOPCode.GDbuttonObjects2.length = 0;
gdjs.SHOPCode.GDbackbuttontextObjects1.length = 0;
gdjs.SHOPCode.GDbackbuttontextObjects2.length = 0;

gdjs.SHOPCode.eventsList1(runtimeScene);
return;

}

gdjs['SHOPCode'] = gdjs.SHOPCode;
