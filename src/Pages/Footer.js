import React from "react";

const Foter = () => {
  return (
    <footer className="foter">
        <div className="foter-container">
            &copy; {new Date().getFullYear()} Copyright: <a className="foter-link" href="https://github.com/Niicksan/blog-petfind.me/tree/master">PetFind.me Blog</a>
        </div>
    </footer>
  );
}

export default Foter;