const getTagColor = (type: string) => {
  type = type.toLowerCase();
  switch (type) {
    case 'reactjs': {
      return 'cyan';
    }
    case 'javascript': {
      return 'yellow';
    }
    case 'nextjs': {
      return 'blue';
    }
    case 'chakraui': {
      return 'teal';
    }
  }
};

export default getTagColor;
