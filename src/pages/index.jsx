import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="App">
      <h1>Westcoast Education</h1>
      <p>
        WestCoast Education är ett utbildningsföretag som har sin placering på
        västkusten strax norr om Göteborg. Vi har varit i utbildningsbranschen i
        snart 40 år. Vårt affärsmål är och har varit att tillhandahålla tekniska
        utbildningar inom IT-området. Vi har varit väldigt framgångsrika i alla
        år. Vi har specialiserat oss på framförallt
        systemutvecklingsutbildningar inom webb och mobila lösningar.
      </p>
      <Link to={"/courses"}>View all courses</Link>
    </div>
  );
};

export { Home };
