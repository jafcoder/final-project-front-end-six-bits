import React from "react";
import Browse, { fetchData } from "../../pages/browse.js";

export default {
  title: "Pages/Browse",
  component: Browse,
};

export const BrowsePage = () => <Browse />

withoutName = {};

WithName = { args: {name: "John Doe"} };

// export const BrowsePage = (args, {loaded:{title}}) => (<Browse {...args} title={title} />);
// BrowsePage.args = {  "user_id": 1,
// "title": "Wild Garlic",
// "description": "The smell of spring!",
// "location": "Torquay",
// "free": false,
// "price": 100.30,
// "date": "23/2/2022"};
// BrowsePage.loaders = [
//     async () => {
//         let data = await fetchData();
//         return data.props;
//     }
// ]