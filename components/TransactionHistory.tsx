import React from 'react';
import {View, Text, FlatList, TouchableOpacity, Image} from 'react-native';

import {COLORS, SIZES, FONTS, icons} from '../constants';

interface PropsTransactionHistory {
  id: number;
  description: string;
  amount: number;
  currency: string;
  type: string;
  date: string;
}

const TransactionHistory = ({
  customContainerStyle,
  history,
}: {
  customContainerStyle?: any;
  history: PropsTransactionHistory[];
}) => {
  const renderItem = ({item}: {item: PropsTransactionHistory}) => (
    <TouchableOpacity
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: SIZES.base,
      }}
      onPress={() => console.log('item', item)}>
      <Image
        source={icons.transaction}
        style={{
          width: 30,
          height: 30,
          tintColor: COLORS.primary,
        }}
      />

      <View style={{flex: 1, marginLeft: SIZES.radius}}>
        <Text style={{...FONTS.h3}}>{item.description}</Text>
        <Text style={{color: COLORS.gray, ...FONTS.body4}}>{item.date}</Text>
      </View>

      <View
        style={{flexDirection: 'row', height: '100%', alignItems: 'center'}}>
        <Text
          style={{
            color: item.type == 'B' ? COLORS.green : COLORS.black,
            ...FONTS.h3,
          }}>
          {item.amount} {item.currency}
        </Text>

        <Image
          source={icons.right_arrow}
          style={{
            width: 20,
            height: 20,
            tintColor: COLORS.gray,
          }}
        />
      </View>
    </TouchableOpacity>
  );

  return (
    <View
      style={{
        marginTop: SIZES.padding,
        marginHorizontal: SIZES.padding,
        padding: 20,
        borderRadius: SIZES.radius,
        backgroundColor: COLORS.white,
        ...customContainerStyle,
      }}>
      <Text style={{...FONTS.h2}}>Transaction History</Text>
      <FlatList
        contentContainerStyle={{marginTop: SIZES.radius}}
        scrollEnabled={false}
        data={history}
        keyExtractor={item => `${item.id}`}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => {
          return (
            <View
              style={{
                width: '100%',
                height: 1,
                backgroundColor: COLORS.lightGray,
              }}
            />
          );
        }}
      />
    </View>
  );
};

export default TransactionHistory;
