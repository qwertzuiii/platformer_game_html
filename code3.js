gdjs.CreditsCode = {};
gdjs.CreditsCode.GDlightObjects1= [];
gdjs.CreditsCode.GDlightObjects2= [];
gdjs.CreditsCode.GDTEXTObjects1= [];
gdjs.CreditsCode.GDTEXTObjects2= [];
gdjs.CreditsCode.GDenemy_95GoombaObjects1= [];
gdjs.CreditsCode.GDenemy_95GoombaObjects2= [];
gdjs.CreditsCode.GDedObjects1= [];
gdjs.CreditsCode.GDedObjects2= [];
gdjs.CreditsCode.GDNewTextObjects1= [];
gdjs.CreditsCode.GDNewTextObjects2= [];

gdjs.CreditsCode.conditionTrue_0 = {val:false};
gdjs.CreditsCode.condition0IsTrue_0 = {val:false};
gdjs.CreditsCode.condition1IsTrue_0 = {val:false};
gdjs.CreditsCode.condition2IsTrue_0 = {val:false};
gdjs.CreditsCode.conditionTrue_1 = {val:false};
gdjs.CreditsCode.condition0IsTrue_1 = {val:false};
gdjs.CreditsCode.condition1IsTrue_1 = {val:false};
gdjs.CreditsCode.condition2IsTrue_1 = {val:false};


gdjs.CreditsCode.mapOfGDgdjs_46CreditsCode_46GDedObjects1Objects = Hashtable.newFrom({"ed": gdjs.CreditsCode.GDedObjects1});gdjs.CreditsCode.mapOfGDgdjs_46CreditsCode_46GDTEXTObjects1Objects = Hashtable.newFrom({"TEXT": gdjs.CreditsCode.GDTEXTObjects1});gdjs.CreditsCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("enemy_Goomba"), gdjs.CreditsCode.GDenemy_95GoombaObjects1);

gdjs.CreditsCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.CreditsCode.GDenemy_95GoombaObjects1.length;i<l;++i) {
    if ( gdjs.CreditsCode.GDenemy_95GoombaObjects1[i].getX() < 179 ) {
        gdjs.CreditsCode.condition0IsTrue_0.val = true;
        gdjs.CreditsCode.GDenemy_95GoombaObjects1[k] = gdjs.CreditsCode.GDenemy_95GoombaObjects1[i];
        ++k;
    }
}
gdjs.CreditsCode.GDenemy_95GoombaObjects1.length = k;}if (gdjs.CreditsCode.condition0IsTrue_0.val) {
/* Reuse gdjs.CreditsCode.GDenemy_95GoombaObjects1 */
{for(var i = 0, len = gdjs.CreditsCode.GDenemy_95GoombaObjects1.length ;i < len;++i) {
    gdjs.CreditsCode.GDenemy_95GoombaObjects1[i].setX(gdjs.CreditsCode.GDenemy_95GoombaObjects1[i].getX() + (1));
}
}}

}


};gdjs.CreditsCode.mapOfGDgdjs_46CreditsCode_46GDenemy_9595GoombaObjects1Objects = Hashtable.newFrom({"enemy_Goomba": gdjs.CreditsCode.GDenemy_95GoombaObjects1});gdjs.CreditsCode.eventsList1 = function(runtimeScene) {

{


gdjs.CreditsCode.condition0IsTrue_0.val = false;
{
gdjs.CreditsCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.CreditsCode.condition0IsTrue_0.val) {
/* Reuse gdjs.CreditsCode.GDenemy_95GoombaObjects1 */
{for(var i = 0, len = gdjs.CreditsCode.GDenemy_95GoombaObjects1.length ;i < len;++i) {
    gdjs.CreditsCode.GDenemy_95GoombaObjects1[i].returnVariable(gdjs.CreditsCode.GDenemy_95GoombaObjects1[i].getVariables().getFromIndex(0)).setNumber(1);
}
}}

}


};gdjs.CreditsCode.eventsList2 = function(runtimeScene) {

{


gdjs.CreditsCode.condition0IsTrue_0.val = false;
{
gdjs.CreditsCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.CreditsCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs.CreditsCode.GDNewTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("TEXT"), gdjs.CreditsCode.GDTEXTObjects1);
gdjs.copyArray(runtimeScene.getObjects("enemy_Goomba"), gdjs.CreditsCode.GDenemy_95GoombaObjects1);
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "getstart");
}{gdjs.evtTools.camera.hideLayer(runtimeScene, "GetLight");
}{for(var i = 0, len = gdjs.CreditsCode.GDenemy_95GoombaObjects1.length ;i < len;++i) {
    gdjs.CreditsCode.GDenemy_95GoombaObjects1[i].flipX(true);
}
}{for(var i = 0, len = gdjs.CreditsCode.GDTEXTObjects1.length ;i < len;++i) {
    gdjs.CreditsCode.GDTEXTObjects1[i].setTextAlignment("center");
}
}{for(var i = 0, len = gdjs.CreditsCode.GDNewTextObjects1.length ;i < len;++i) {
    gdjs.CreditsCode.GDNewTextObjects1[i].hide();
}
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("light"), gdjs.CreditsCode.GDlightObjects1);
{for(var i = 0, len = gdjs.CreditsCode.GDlightObjects1.length ;i < len;++i) {
    gdjs.CreditsCode.GDlightObjects1[i].setOpacity(100);
}
}}

}


{


gdjs.CreditsCode.condition0IsTrue_0.val = false;
gdjs.CreditsCode.condition1IsTrue_0.val = false;
{
gdjs.CreditsCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "getstart") > 1;
}if ( gdjs.CreditsCode.condition0IsTrue_0.val ) {
{
{gdjs.CreditsCode.conditionTrue_1 = gdjs.CreditsCode.condition1IsTrue_0;
gdjs.CreditsCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9096260);
}
}}
if (gdjs.CreditsCode.condition1IsTrue_0.val) {
{gdjs.evtTools.camera.showLayer(runtimeScene, "GetLight");
}{gdjs.evtTools.sound.playSound(runtimeScene, "sounds\\lightsOn.wav", false, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)), 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("TEXT"), gdjs.CreditsCode.GDTEXTObjects1);

gdjs.CreditsCode.condition0IsTrue_0.val = false;
gdjs.CreditsCode.condition1IsTrue_0.val = false;
{
gdjs.CreditsCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "getstart") > 1.5;
}if ( gdjs.CreditsCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.CreditsCode.GDTEXTObjects1.length;i<l;++i) {
    if ( gdjs.CreditsCode.GDTEXTObjects1[i].getVariableNumber(gdjs.CreditsCode.GDTEXTObjects1[i].getVariables().getFromIndex(0)) == 0 ) {
        gdjs.CreditsCode.condition1IsTrue_0.val = true;
        gdjs.CreditsCode.GDTEXTObjects1[k] = gdjs.CreditsCode.GDTEXTObjects1[i];
        ++k;
    }
}
gdjs.CreditsCode.GDTEXTObjects1.length = k;}}
if (gdjs.CreditsCode.condition1IsTrue_0.val) {
/* Reuse gdjs.CreditsCode.GDTEXTObjects1 */
{for(var i = 0, len = gdjs.CreditsCode.GDTEXTObjects1.length ;i < len;++i) {
    gdjs.CreditsCode.GDTEXTObjects1[i].setY(gdjs.CreditsCode.GDTEXTObjects1[i].getY() + (0.5));
}
}}

}


{


gdjs.CreditsCode.condition0IsTrue_0.val = false;
gdjs.CreditsCode.condition1IsTrue_0.val = false;
{
gdjs.CreditsCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "getstart") > 2;
}if ( gdjs.CreditsCode.condition0IsTrue_0.val ) {
{
{gdjs.CreditsCode.conditionTrue_1 = gdjs.CreditsCode.condition1IsTrue_0;
gdjs.CreditsCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9297604);
}
}}
if (gdjs.CreditsCode.condition1IsTrue_0.val) {
{gdjs.evtTools.sound.playMusic(runtimeScene, "music\\oca.mp3", false, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)), 1);
}}

}


{


gdjs.CreditsCode.condition0IsTrue_0.val = false;
{
gdjs.CreditsCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Return");
}if (gdjs.CreditsCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("TEXT"), gdjs.CreditsCode.GDTEXTObjects1);
gdjs.copyArray(runtimeScene.getObjects("ed"), gdjs.CreditsCode.GDedObjects1);

gdjs.CreditsCode.condition0IsTrue_0.val = false;
{
gdjs.CreditsCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.CreditsCode.mapOfGDgdjs_46CreditsCode_46GDedObjects1Objects, gdjs.CreditsCode.mapOfGDgdjs_46CreditsCode_46GDTEXTObjects1Objects, false, runtimeScene, false);
}if (gdjs.CreditsCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs.CreditsCode.GDNewTextObjects1);
/* Reuse gdjs.CreditsCode.GDTEXTObjects1 */
/* Reuse gdjs.CreditsCode.GDedObjects1 */
{for(var i = 0, len = gdjs.CreditsCode.GDTEXTObjects1.length ;i < len;++i) {
    gdjs.CreditsCode.GDTEXTObjects1[i].returnVariable(gdjs.CreditsCode.GDTEXTObjects1[i].getVariables().getFromIndex(0)).setNumber(1);
}
}{for(var i = 0, len = gdjs.CreditsCode.GDNewTextObjects1.length ;i < len;++i) {
    gdjs.CreditsCode.GDNewTextObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.CreditsCode.GDedObjects1.length ;i < len;++i) {
    gdjs.CreditsCode.GDedObjects1[i].returnVariable(gdjs.CreditsCode.GDedObjects1[i].getVariables().getFromIndex(0)).setNumber(1);
}
}
{ //Subevents
gdjs.CreditsCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("enemy_Goomba"), gdjs.CreditsCode.GDenemy_95GoombaObjects1);

gdjs.CreditsCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.CreditsCode.GDenemy_95GoombaObjects1.length;i<l;++i) {
    if ( gdjs.CreditsCode.GDenemy_95GoombaObjects1[i].getVariableNumber(gdjs.CreditsCode.GDenemy_95GoombaObjects1[i].getVariables().getFromIndex(0)) == 1 ) {
        gdjs.CreditsCode.condition0IsTrue_0.val = true;
        gdjs.CreditsCode.GDenemy_95GoombaObjects1[k] = gdjs.CreditsCode.GDenemy_95GoombaObjects1[i];
        ++k;
    }
}
gdjs.CreditsCode.GDenemy_95GoombaObjects1.length = k;}if (gdjs.CreditsCode.condition0IsTrue_0.val) {
/* Reuse gdjs.CreditsCode.GDenemy_95GoombaObjects1 */
{for(var i = 0, len = gdjs.CreditsCode.GDenemy_95GoombaObjects1.length ;i < len;++i) {
    gdjs.CreditsCode.GDenemy_95GoombaObjects1[i].setX(gdjs.CreditsCode.GDenemy_95GoombaObjects1[i].getX() + (5));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("enemy_Goomba"), gdjs.CreditsCode.GDenemy_95GoombaObjects1);

gdjs.CreditsCode.condition0IsTrue_0.val = false;
{
gdjs.CreditsCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.CreditsCode.mapOfGDgdjs_46CreditsCode_46GDenemy_9595GoombaObjects1Objects, runtimeScene, true, false);
}if (gdjs.CreditsCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.CreditsCode.eventsList1(runtimeScene);} //End of subevents
}

}


};

gdjs.CreditsCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.CreditsCode.GDlightObjects1.length = 0;
gdjs.CreditsCode.GDlightObjects2.length = 0;
gdjs.CreditsCode.GDTEXTObjects1.length = 0;
gdjs.CreditsCode.GDTEXTObjects2.length = 0;
gdjs.CreditsCode.GDenemy_95GoombaObjects1.length = 0;
gdjs.CreditsCode.GDenemy_95GoombaObjects2.length = 0;
gdjs.CreditsCode.GDedObjects1.length = 0;
gdjs.CreditsCode.GDedObjects2.length = 0;
gdjs.CreditsCode.GDNewTextObjects1.length = 0;
gdjs.CreditsCode.GDNewTextObjects2.length = 0;

gdjs.CreditsCode.eventsList2(runtimeScene);
return;

}

gdjs['CreditsCode'] = gdjs.CreditsCode;
