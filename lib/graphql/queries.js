const queryHomeList = `
query homes($where: JSON!) {
homes(where: $where) {
  id
  titulo
 lists{ ...list }
}

}
fragment list on ComponentListList {
list
id
}
`;

const queryHome = `query homes($where: JSON!) {
    homes(where: $where) {
      titulo
      content
      image_bg {
        url
      }
        altimage
          button_text
          button_link
    
    }
  }
`;

export const queries = {
  queryHome: {
    default: queryHome,
    list: queryHomeList,
  },
};
