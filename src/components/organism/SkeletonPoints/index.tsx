import React from 'react';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import {View} from '@ant-design/react-native';
import {styledSkeletonPoints} from '@components/organism/SkeletonPoints/styled';

export const SkeletonPoints = () => {
  return (
    <>
      <View style={styledSkeletonPoints.container}>
        <SkeletonPlaceholder borderRadius={10}>
          <>
            <SkeletonPlaceholder.Item
              height={19}
              width={'50%'}
              marginBottom={8}
            />
            <SkeletonPlaceholder.Item height={19} width={'25%'} />

            <SkeletonPlaceholder.Item
              height={200}
              width="80%"
              marginLeft="10%"
              marginTop={40}
            />
            <SkeletonPlaceholder.Item marginTop={40}>
              {new Array(5).fill(0).map((_, index) => (
                <SkeletonPlaceholder.Item
                  key={index}
                  flexGrow={1}
                  flexDirection="row"
                  marginTop={20}
                  justifyContent="center">
                  <SkeletonPlaceholder.Item
                    height={55}
                    width={55}
                    marginRight={16}
                  />
                  <SkeletonPlaceholder.Item
                    flexGrow={1}
                    justifyContent="center">
                    <SkeletonPlaceholder.Item
                      height={19}
                      width={'80%'}
                      marginBottom={7}
                    />
                    <SkeletonPlaceholder.Item height={19} width={'50%'} />
                  </SkeletonPlaceholder.Item>
                </SkeletonPlaceholder.Item>
              ))}
            </SkeletonPlaceholder.Item>
          </>
        </SkeletonPlaceholder>
      </View>
    </>
  );
};
