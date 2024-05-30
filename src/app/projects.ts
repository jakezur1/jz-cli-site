export interface Project {
  name: string,
  ghLink: string,
  description: string,
  additional: string
}

export const projects = new Map<string, any>([
  ['ante-up', {
    name: 'ante-up',
    ghLink: 'https://gitfront.io/r/jakezur/QKnN771TLDRn/ante-up',
    description: 'AnteUp is a fullstack mobile app build on a react frontend and django backend. AnteUp streamlines the ' +
      'finances of home poker games. A user can host a session, and buy-in for whatever amount he/she likes, through ' +
      'Venmo or Zelle. Then other users can join the session using a 5 digit code, or tapping their phone to the host ' +
      'phone via NFC technology. The users who join also buy-in upon joining the same was as the host did. After the ' +
      'group finishes their in person game, they request cash-outs from the app for however much they made/lost, and ' +
      'are paid back out to the account they paid from. The app also calculates user analytics, and friend leaderboards.'
    ,
    additional: 'Key Tools/Frameworks: Python, Django, Websockets, AWS, Google Firebase (auth), React Native'
  }],
  ['factorlib', {
    name: 'factorlib',
    ghLink: 'https://github.com/jakezur1/factorlib',
    description: 'Factorlib is a python package I developed after discovering alpha factor models for stock forecasting.' +
      'Factorlib allows users to easily create factor models, feature engineer factors, add factors to their model, ' +
      'backtest their model over an period with any stocks, and evaluate their model with an entire statistics package' +
      'from factorlib. The package supports walk-forward optimization, 3 options for portfolio optimization, hyper parameter ' +
      'tuning via grid search, and 4 different state of the art linear regressors like XGBoost.'
    ,
    additional: 'Key Tools/Frameworks: Python, Pandas, XGBoost, Scikit-learn, Inheritance, Feature Engineering'
  }],
  ['factorlib', {
    name: 'factorlib',
    ghLink: 'https://github.com/jakezur1/factorlib',
    description: 'Factorlib is a python package I developed after discovering alpha factor models for stock forecasting.' +
      'Factorlib allows users to easily create factor models, feature engineer factors, add factors to their model, ' +
      'backtest their model over an period with any stocks, and evaluate their model with an entire statistics package' +
      'from factorlib. The package supports walk-forward optimization, 3 options for portfolio optimization, hyper parameter ' +
      'tuning via grid search, and 4 different state of the art linear regressors like XGBoost.'
    ,
    additional: 'Key Tools/Frameworks: Python, Pandas, XGBoost, Scikit-learn, Inheritance, Feature Engineering'
  }],
  ['repo-reader', {
    name: 'repo-reader',
    ghLink: 'https://github.com/jakezur1/repo-reader',
    description: 'I built repo-reader with a team of 3 others during a 24hr GooglexMHacks hackathon. Repo-reader is a ' +
      'chrome extension that allows users to automatically generate markdown README.md files for any visited github link. ' +
      'It also provides 6 metric based Code Analyses and Reviews for a repository, highlighting good practices and ' +
      'possible areas of improvement.'
    ,
    additional: 'Key Tools/Frameworks: React.JS, Python, Flask, Chrome Extension, Gemini, Github API/Trees'
  }],
  ['advanced-dsa', {
    name: 'advanced-dsa',
    ghLink: 'https://github.com/jakezur1/advanced-dsa',
    description: 'This repo houses scratch implementations of common advanced data structures. Currently I have implemented ' +
      'a trie, segment tree, and square root decomposition algorithm.'
    ,
    additional: 'Key Tools/Frameworks: Trie, Segment Tree, Square Root Decomposition'
  }],
  ['nbAI', {
    name: 'nbAI',
    ghLink: 'https://github.com/jakezur1/nbAI',
    description: 'After Michigan won the natty, I became interested in the way different sports books create their lines. ' +
      'This repository represents the current state of my ongoing research into sports line predictions. I\'ve currently ' +
      'reproduced two papers. The first paper investigates the use of clustering to classify player types. We cluster ' +
      'players for the year before on a variety of game stats, and weight teams the next year based on their previous ' +
      'player types as a feature. Then we train a neural network to learn these features to predict game winners, hoping ' +
      'it will learn what player types can play against which player types. The second paper investigates a new player ' +
      'clutch rating to use a feature, which I tested in conjunction with the features from paper 1.'
    ,
    additional: 'Key Tools/Frameworks: Python, Scikit-learn, K-means Clustering, Data Analysis'
  }],
  ['jz-cli-site', {
    name: 'jz-cli-site',
    ghLink: 'https://github.com/jakezur1/jz-cli-site',
    description: 'It\'s this personal website! In my internship during summer 2024 at NextEra Energy, my first project ' +
      'required that I learned Angular. While I don\'t prefer front-end, I spent that weekend learning Angular through ' +
      'YouTube videos and building this website. The website uses a tree data structure to represent file/folder structures ' +
      'and dynamic rendering of component to choose the output to show for a certain command. Hope you enjoy!',
    additional: 'Key Tools/Frameworks: Angular, Trees'
  }],
  ['id3-decision-tree', {
    name: 'id3-decision-tree',
    ghLink: 'https://github.com/jakezur1/id3-decision-tree'
  }],
  ['k-means-clustering', {
    name: 'k-means-clustering',
    ghLink: 'https://github.com/jakezur1/k-means-clustering'
  }]
])
