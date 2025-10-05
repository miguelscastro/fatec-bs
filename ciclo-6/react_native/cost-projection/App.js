import { useState } from 'react';
import { View, StyleSheet } from 'react-native';

import { INITIAL_ITEMS } from './src/data/items';
import { COLORS } from './src/constants/colors';

import { Loading } from './src/pages/Loading';
import { Home } from './src/pages/Home';
import { Cards } from './src/pages/Cards';
import { NewCard } from './src/pages/NewCard';
import { CardDetails } from './src/pages/CardDetails';
import { AddCardItem } from './src/pages/AddCardItem';
import { Settings } from './src/pages/Settings';

export default function App() {
  const [currentPage, setCurrentPage] = useState('Loading');

  const [navigationParams, setNavigationParams] = useState(null);

  const [items, setItems] = useState(INITIAL_ITEMS);

  const [theme, setTheme] = useState('light');
  const [currency, setCurrency] = useState('R$');

  const navigate = (page, params = null) => {
    setCurrentPage(page);
    setNavigationParams(params);
  };

  const addItem = (newItem) => {
    setItems((prevItems) => [...prevItems, newItem]);
  };

  const deleteItem = (itemId) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };

  const addIngredient = (itemId, newIngredient) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId
          ? { ...item, ingredients: [...item.ingredients, newIngredient] }
          : item
      )
    );
  };

  const deleteIngredient = (itemId, ingredientId) => {
    setItems((prevItems) =>
      prevItems.map((item) => {
        if (item.id === itemId) {
          return {
            ...item,
            ingredients: item.ingredients.filter(
              (ing) => ing.id !== ingredientId
            ),
          };
        }
        return item;
      })
    );
  };

  const getItemById = (itemId) => {
    return items.find((item) => item.id === itemId);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'Loading':
        return <Loading navigate={navigate} />;
      case 'Home':
        return <Home navigate={navigate} theme={theme} />;
      case 'Cards':
        return (
          <Cards
            navigate={navigate}
            items={items}
            deleteItem={deleteItem}
            theme={theme}
            currency={currency}
          />
        );
      case 'NewCard':
        return <NewCard navigate={navigate} addItem={addItem} theme={theme} />;
      case 'CardDetails':
        return (
          <CardDetails
            navigate={navigate}
            params={navigationParams}
            getItemById={getItemById}
            deleteIngredient={deleteIngredient}
            theme={theme}
            currency={currency}
          />
        );
      case 'AddCardItem':
        return (
          <AddCardItem
            navigate={navigate}
            params={navigationParams}
            addIngredient={addIngredient}
            theme={theme}
            currency={currency}
          />
        );
      case 'Settings':
        return (
          <Settings
            navigate={navigate}
            theme={theme}
            setTheme={setTheme}
            currency={currency}
            setCurrency={setCurrency}
          />
        );

      default:
        return <Home navigate={navigate} theme={theme} />;
    }
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:
        theme === 'light' ? COLORS.background : COLORS.darkBackground,
    },
  });

  return <View style={styles.container}>{renderPage()}</View>;
}
