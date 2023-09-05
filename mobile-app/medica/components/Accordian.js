import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const Accordion = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <View>
      <TouchableOpacity onPress={toggleAccordion}>
        <Text>{title}</Text>
      </TouchableOpacity>
      {isOpen && <Text>{content}</Text>}
    </View>
  );
};

export default Accordion;
