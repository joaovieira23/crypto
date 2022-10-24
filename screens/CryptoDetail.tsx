import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Animated,
  ImageSourcePropType,
} from 'react-native';

import {useNavigation} from '@react-navigation/native';

import {dummyData, COLORS, SIZES, FONTS, icons} from '../constants';
import {HeaderBar, CurrencyLabel} from '../components';

import {
  VictoryScatter,
  VictoryLine,
  VictoryChart,
  VictoryAxis,
} from 'victory-native';

import {VictoryCustomTheme} from '../styles';

interface PropsCurrency {
  image: ImageSourcePropType;
  currency: string;
  code: string;
  amount: number;
  changes: string;
  type: string;
}

const CryptoDetail = ({route}: {route: any}) => {
  const navigation = useNavigation();

  const [selectedCurrency, setSelectedCurrency] =
    useState<PropsCurrency | null>(null);

  useEffect(() => {
    const {currency} = route.params;
    setSelectedCurrency(currency);
  }, [route.params]);

  function renderChart() {
    return (
      <View
        style={{
          marginTop: SIZES.padding,
          marginHorizontal: SIZES.radius,
          alignItems: 'center',
          borderRadius: SIZES.radius,
          backgroundColor: COLORS.white,
          ...styles.shadow,
        }}>
        {/* Header */}
        <View
          style={{
            flexDirection: 'row',
            marginTop: SIZES.padding,
            paddingHorizontal: SIZES.padding,
          }}>
          <View style={{flex: 1}}>
            <CurrencyLabel
              icon={selectedCurrency?.image}
              currency={selectedCurrency?.currency}
              code={selectedCurrency?.code}
            />
          </View>
          <View>
            <Text style={{...FONTS.h3}}>${selectedCurrency?.amount}</Text>
            <Text
              style={{
                color:
                  selectedCurrency?.type == 'I' ? COLORS.green : COLORS.red,
                ...FONTS.body3,
              }}>
              {selectedCurrency?.changes}
            </Text>
          </View>
          <View />
        </View>
        {/* Chart */}
        <View
          style={{
            marginTop: -25,
          }}>
          <VictoryChart
            theme={VictoryCustomTheme}
            height={220}
            width={SIZES.width - 40}>
            <VictoryLine
              style={{
                data: {
                  stroke: COLORS.secondary,
                },
                parent: {
                  border: '1px solid #ccc',
                },
              }}
              data={selectedCurrency?.chartData}
              categories={{
                x: ['15 MIN', '30 MIN', '45 MIN', '60 MIN'],
                y: ['15', '30', '45'],
              }}
            />
            <VictoryScatter
              data={selectedCurrency?.chartData}
              size={7}
              style={{
                data: {
                  fill: COLORS.secondary,
                },
              }}
            />
            <VictoryAxis
              style={{
                grid: {
                  stroke: 'transparent',
                },
              }}
            />

            <VictoryAxis
              style={{
                axis: {
                  stroke: 'transparent',
                },
                grid: {
                  stroke: 'grey',
                },
              }}
            />
          </VictoryChart>
        </View>
        {/* Options */}
        {/* Dots */}
      </View>
    );
  }

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.lightGray1,
      }}>
      <HeaderBar right />
      <ScrollView>
        <View style={{flex: 1, paddingBottom: SIZES.padding}}>
          {renderChart()}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
  },
});

export default CryptoDetail;
