export const menuLinks = [
    { name: "Home", link: "./dashboard", icon :"home" },
    { name: "Order", link: "./order", icon : "trash-bin"},
    { name: "Wallet", link: "./wallet", icon : "wallet"},
    { name: "Profile", link: "./profile", icon : "person"},
    // { name: "Setting", link: "#", icon : "settings"},
    { name: "About", link: "#", icon : "information-circle"},
    { name: "Logout", link: "./login", icon : "log-out"},
  ];

// // Wastes
export const plasticWRate = 12
export const metalWRate = 15
export const generalWRate = 10
export const organicWRate = 13
export const NonRWRate = 12

export const wasteInfo = [
    {
      name: "Metal Waste",
      desc: "This can be found in various forms throughout your home. Most metals can be recycled. Consider taking these items to a scrap yard or your closest Brisbane recycling depot to dispose of this waste type properly.",
      color: "gray-500",
      hover: "gray-700",
    },
    {
      name: "Plastic Waste",
      desc: "This consists of bags, containers, jars, bottles and many other products that can be found in your household. Plastic is not biodegradable, but many types of plastic can be recycled. Plastic should not be mixed in with your regular waste, it should be sorted and placed in your recycling bin.",
      color: "blue-500",
      hover: "blue-700",
    },
    {
      name: "General Waste",
      desc: "Solid rubbish can include a variety of items found in your household along with commercial and industrial locations.",
      color: "yellow-500" ,
      hover: "yellow-700",
      types: [
        {"papers" : "This includes packaging materials, newspapers, cardboard and other products. Paper can easily be recycled and reused so make sure to place them in your recycling bin or take them to your closest Brisbane recycling depot."},
        {"ceramics": "These items can easily be recycled. Look for special glass recycling bins and bottle banks to dispose of them correctly."},
        {"Liquid" : "Liquid waste is commonly found both in households as well as in industries. This waste includes dirty water, organic liquids, wash water, waste detergents and even rainwater. n/ You should also know that liquid waste can be classified into point and non-point source waste. All manufactured liquid waste is classified as point source waste. On the other hand, natural liquid waste is classified as non-point source waste."},
      ],
    },
    {
      name: "Organic Waste",
      desc: "Organic waste is another common household. All food waste, garden waste, manure and rotten meat are classified as organic waste. Over time, organic waste is turned into manure by microorganisms. However, this does not mean that you can dispose of them anywhere.",
      color: "green-500",
      hover: "green-700",
    },
    {
      name: "Non Recyclable Waste", 
      desc: "Non-Recyclable waste means all garbage, and other refuse not defined as recyclable materials",
      color: "red-500",
      hover: "red-700",
    },
  ];
