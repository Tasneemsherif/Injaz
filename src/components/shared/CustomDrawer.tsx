import React from "react";
import {ImageBackground, Image, Pressable } from "react-native";
import { DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer";
import Icons from "./icons";
import { Box, Text } from "@/utils/theme";
import { DrawerContentComponentProps } from "@react-navigation/drawer";

const CustomDrawer: React.FC <DrawerContentComponentProps> = (props) => {
    return (
        <Box style={{flex: 1}} >
        <DrawerContentScrollView {...props} contentContainerStyle={{backgroundColor: '#C0E5FE'}}>
        
          
          <Text
            style={{
              color: '#fff',
              fontSize: 18,
              //fontFamily: 'Roboto-Medium',
              marginBottom: 5,
            }}>
            Tasneem Sherif
            </Text>
            <Box style={{flexDirection: 'row'}}>
            <Text
              style={{
                color: '#fff',
                //fontFamily: 'Roboto-Regular',
                marginRight: 5,
              }}>
              280 EGP
            </Text>
            <Icons name="completed"  color="#fff" />
          </Box>
        
        <Box style={{flex: 1, backgroundColor: '#fff', paddingTop: 10}}>
            <DrawerItemList {...props}/>
            </Box>
        </DrawerContentScrollView>
        <Box style={{padding: 20, borderTopWidth: 1, borderTopColor: '#77C3EC'}}>
        <Pressable >
          <Box style={{flexDirection: 'row', alignItems: 'center'}}>
            <Icons name="home" />
            <Text
              style={{
                fontSize: 15,
                //fontFamily: 'Roboto-Medium',
                marginLeft: 5,
              }}>
              Tell a Friend
            </Text>
          </Box>
        </Pressable>
        <Pressable onPress={() => {}} style={{paddingVertical: 15}}>
          <Box>
            <Icons name="home"  />
            <Text
              style={{
                fontSize: 15,
                //fontFamily: 'Roboto-Medium',
                marginLeft: 5,
              }}>
              Sign Out
              </Text>
          </Box>
        </Pressable>
        </Box>
        </Box>
    );
}

export default CustomDrawer;
