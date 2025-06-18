import React, { useState } from "react";
import { Link, useNavigate, useOutletContext } from "react-router-dom";
import Book from "./Book";
import { useDispatch, useSelector } from "react-redux";
import { addbook } from "./Reduxslice";
// import { useDispatch,useSelector } from "react-redux";
// import { addbooks } from "./Reduxslice";
// import { useOutletContext } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  // const [popularbooks, setPopularbooks] = useState([
  //   {
  //     _id: 7,
  //     title: "Zend Framework in Action",
  //     // isbn: "1933988320",
  //     pageCount: 432,
  //     // publishedDate: {
  //     //   $date: "2008-12-01T00:00:00.000-0800",
  //     // },
  //     thumbnailUrl:
  //       "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/allen.jpg",
  //     shortDescription:
  //       "Zend Framework in Action is a comprehensive tutorial that shows how to use the Zend Framework to create web-based applications and web services. This book takes you on an over-the-shoulder tour of the components of the Zend Framework as you build a high quality, real-world web application.",
  //     // longDescription:
  //     //   "From rather humble beginnings as the Personal Home Page scripting language, PHP has found its way into almost every server, corporation, and dev shop in the world. On an average day, somewhere between 500,000 and 2 million coders do something in PHP. Even when you use a well-understood language like PHP, building a modern web application requires tools that decrease development time and cost while improving code quality. Frameworks such as Ruby-on-Rails and Django have been getting a lot of attention as a result.     For PHP coders, the Zend Framework offers that same promise without the need to move away from PHP. This powerful collection of components can be used in part or as a whole to speed up the development process. Zend Framework has the backing of Zend Technologies; the driving force behind the PHP programming language in which it is written. The first production release of the Zend Framework became available in July of 2007.    Zend Framework in Action is a comprehensive tutorial that shows how to use the Zend Framework to create web-based applications and web services. This book takes you on an over-the-shoulder tour of the components of the Zend Framework as you build a high quality, real-world web application. This book is organized around the techniques you'll use every day as a web developer \"data handling, forms, authentication, and so forth. As you follow the running example, you'll learn to build interactive Ajax-driven features into your application without sacrificing nuts-and-bolts considerations like security and performance.  This book is aimed at the competent PHP developer who wants to master framework-driven web development. Zend Framework in Action goes beyond the docs but still provides quick access to the most common topics encountered in the development of web applications.  ",
  //     // status: "PUBLISH",
  //     authors: ["Rob Allen", "Nick Lo", "Steven Brown"],
  //     categories: ["Web Development"],
  //   },
  //   {
  //     _id: 8,
  //     title: "Flex on Java",
  //     // isbn: "1933988797",
  //     pageCount: 265,
  //     // publishedDate: {
  //     //   $date: "2010-10-15T00:00:00.000-0700",
  //     // },
  //     thumbnailUrl:
  //       "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/allmon.jpg",
  //     shortDescription:
  //       "   A beautifully written book that is a must have for every Java Developer.       Ashish Kulkarni, Technical Director, E-Business Software Solutions Ltd.",
  //     // longDescription:
  //     //   "In the demo, a hip designer, a sharply-dressed marketer, and a smiling, relaxed developer sip lattes and calmly discuss how Flex is going to make customers happy and shorten the workday   all while boosting the bottom line. The software systems they're using have been carefully selected and built from the ground up to work together seamlessly. There are no legacy systems, data, or competing business concerns to manage.    Cut to reality.    You're a Java developer. The marketing guy tells you that \"corporate\" wants a Flex-based site and you have to deliver it on top of what you already have. Your budget  Don't even ask. \"Make it look like the Discovery channel or something.\"    Flex on Java assumes you live in the real world   not the demo. This unique book shows you how to refactor an existing web application using the server-side you already know. You'll learn to use Flex 3 in concert with Spring, EJB 3, POJOs, JMS, and other standard technologies. Wherever possible, the examples use free or open source software.    The authors start with a typical Java web app and show you how to add a rich Flex interface. You also learn how to integrate Flex into your server-side Java via the BlazeDS framework, Adobe's open-source remoting and web messaging technology for Flex.    The book shows you how to deploy to not only the web but also to the desktop using the Adobe Integrated Runtime (AIR). You will learn how to integrate Flex into your existing applications in order to build a next generation application that will delight users.    Flex on Java is approachable for anyone beginning Java and Flex development.    ",
  //     // status: "PUBLISH",
  //     authors: ["Bernerd Allmon", "Jeremy Anderson"],
  //     categories: ["Internet"],
  //   },
  //   {
  //     // _id: 9,
  //     title: "Griffon in Action",
  //     // isbn: "1935182234",
  //     pageCount: 375,
  //     // publishedDate: {
  //     //   $date: "2012-06-04T00:00:00.000-0700",
  //     // },
  //     thumbnailUrl:
  //       "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/almiray.jpg",
  //     shortDescription:
  //       "Griffon in Action is a comprehensive tutorial written for Java developers who want a more productive approach to UI development. In this book, you'll immediately dive into Griffon. After a Griffon orientation and a quick Groovy tutorial, you'll start building examples that explore Griffon's high productivity approach to Swing development. One of the troublesome parts of Swing development is the amount of Java code that is required to get a simple application off the ground.",
  //     // longDescription:
  //     //   "Although several options exist for interface development in Java, even popular UI toolkits like Swing have been notoriously complex and difficult to use. Griffon, an agile framework that uses Groovy to simplify Swing, makes UI development dramatically faster and easier. In many respects, Griffon is for desktop development what Grails is for web development. While it's based on Swing, its declarative style and approachable level of abstraction is instantly familiar to developers familiar with other technologies such as Flex or JavaFX.    Griffon in Action is a comprehensive tutorial written for Java developers who want a more productive approach to UI development. In this book, you'll immediately dive into Griffon. After a Griffon orientation and a quick Groovy tutorial, you'll start building examples that explore Griffon's high productivity approach to Swing development. One of the troublesome parts of Swing development is the amount of Java code that is required to get a simple application off the ground.    You'll learn how SwingBuilder (and its cousin builders) present a very palatable alternative in the form of a DSL geared towards building graphical user interfaces. Pair it up with the convention over configuration paradigm, a well tested and tried application source structure (based on Grails) and you have a recipe for quick and effective Swing application development. Griffon in Action covers declarative view development, like the one provided by JavaFX Script, as well as the structure, architecture and life cycle of Java application development",
  //     // status: "PUBLISH",
  //     authors: ["Andres Almiray", "Danno Ferrin", "", "James Shingler"],
  //     categories: ["Java"],
  //   },
  //   {
  //     // _id: 10,
  //     title: "OSGi in Depth",
  //     // isbn: "193518217X",
  //     pageCount: 325,
  //     // publishedDate: {
  //     //   $date: "2011-12-12T00:00:00.000-0800",
  //     // },
  //     thumbnailUrl:
  //       "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/alves.jpg",
  //     shortDescription:
  //       "Enterprise OSGi shows a Java developer how to develop to the OSGi Service Platform Enterprise specification, an emerging Java-based technology for developing modular enterprise applications. Enterprise OSGi addresses several shortcomings of existing enterprise platforms, such as allowing the creation of better maintainable and extensible applications, and provide a simpler, easier-to-use, light-weight solution to enterprise software development.",
  //     // longDescription:
  //     //   "A good application framework greatly simplifies a developer's task by providing reusable code modules that solve common, tedious, or complex tasks. Writing a great framework requires an extraordinary set of skills-ranging from deep knowledge of a programming language and target platform to a crystal-clear view of the problem space where the applications to be developed using the framework will be used.    OSGi Application Frameworks shows a Java developer how to build frameworks based on the OSGi service platform. OSGi, an emerging Java-based technology for developing modular applications, is a great tool for framework building. A framework itself, OSGi allows the developer to create a more intuitive, modular framework by isolating many of the key challenges the framework developer faces.    This book begins by describing the process, principles, and tools you must master to build a custom application framework. It introduces the fundamental concepts of OSGi, and then shows you how to put OSGi to work building various types of frameworks that solve specific development problems.    OSGi is particularly useful for building frameworks that can be easily extended by developers to create domain-specific applications. This book teaches the developer to break down a problem domain into its abstractions and then use OSGi to create a modular framework solution. Along the way, the developer learns software engineering practices intrinsic to framework building that result in systems with better software qualities, such as flexibility, extensibility, and maintainability.    Author Alexandre Alves guides you through major concepts, such as the definition of programming models and modularization techniques, and complements them with samples that have real applicability using industry-proved technologies, such as Spring-DM and Equinox.",
  //     // status: "PUBLISH",
  //     authors: ["Alexandre de Castro Alves"],
  //     categories: ["Java"],
  //   },
  // ]);
  const popularbooks = useSelector((state) => state.bookslists.popularbooks);
  const dispatch = useDispatch();

  const [statusmessage, setStatusmessage] = useState("");

  const [newbook, setNewbook] = useState({
    title: "",
    pageCount: "",
    thumbnailUrl: "",
    shortDescription: "",
    authors: "",
    categories: "",
  });
  const { bookslist, setBookslist } = useOutletContext();
  const [statusmsgstyle, setStatusmsgstyle] = useState({
    color: "black",
    margin:"",
  });

  const [addcontainerdisplay, setAddcontainerdisplay] = useState("none");

  const addinghandler = () => {
    if (
      (newbook.authors !== "" &&
        newbook.categories !== "" &&
        newbook.pageCount !== "",
      newbook.shortDescription !== "" && newbook.title !== "")
    ) {
      // setBookslist([...bookslist, newbook]);
      dispatch(addbook(newbook))
     
      setStatusmsgstyle({
        color: "black",
        margin:"15px 0px 10px 80px"
      })
      setStatusmessage(
        "Book Added Sucessfully..And wait a seconds to Navigate"
      );
      setTimeout(() => {
        navigate("/browsebooks");
      }, 2000);

      setNewbook({
        title: "",
        pageCount: "",
        thumbnailUrl: "",
        shortDescription: "",
        authors: "",
        categories: "",
      });
    } else {
      setStatusmsgstyle({
        color: "red",
        margin:"15px 0px 10px 160px"
      })
      setStatusmessage("Please Enter All the Input Fileds...");
    }
  };

  return (
    <div >
      <div class="homecontainer" onClick={() => {
      if (addcontainerdisplay == "block")
      {
        setAddcontainerdisplay('none');

      }
    }}>
        <div id="nav">
          <div id="logo">BooksLibrary</div>

          <Link
            to="/"
            style={{ textDecoration: "none", color: "#FBDB93" }}
            class="menu"
          >
            <div>Home</div>
          </Link>
          <Link
            to="/browsebooks"
            style={{ textDecoration: "none", color: "#FBDB93" }}
            class="menu"
          >
            <div>BrowseBooks</div>
          </Link>
          <div class="menu" onClick={() => {
            if (addcontainerdisplay == "none")
            {
              setAddcontainerdisplay('block')
            }
            else {
              setAddcontainerdisplay('none')
            }
          }}>Add Book</div>
        </div>
        <div id="innercontent">
          <h3 id="welcomemsg">Welcome To Our BooksLibrary</h3>
        </div>
      </div>
    
      <div id="listcontainer" >
        <div
          id="title"
          style={{ fontWeight: "bold", fontSize: "1.3rem", margin: "2rem" }}
        >
          Popular Books
        </div>
        <div id="lists">
          {popularbooks.map((book) => (
            <Book
              title={book.title}
              src={book.thumbnailUrl}
              author={book.authors}
              category={book.categories}
            />
          ))}
        </div>
      </div>
      <div id="AddFormcontainer" style={{display:addcontainerdisplay}}>
        <div>
          <div class="label">
            <label >Title </label>
          </div>
          <div>
            <input
              type="text"
              value={newbook.title}
              onChange={(e) => {
                setNewbook({ ...newbook, title: e.target.value });
              }}
              placeholder="Enter The Title.."
            />
          </div>
        </div>
        <div>
          <div class="label">
            <label >Category </label>
          </div>
          <div>
            <input
              type="text"
              value={newbook.categories}
              onChange={(e) => {
                setNewbook({ ...newbook, categories: e.target.value });
              }}
              placeholder="Enter The Category.."
            />
          </div>
        </div>
        <div>
          <div class="label">
            <label >Author Name </label>
          </div>
          <div>
            <input
              type="text"
              value={newbook.authors}
              onChange={(e) => {
                setNewbook({ ...newbook, authors: e.target.value });
              }}
              placeholder="Author Name.."
            />
          </div>
        </div>
        <div>
          <div class="label">
            <label >PageCount </label>
          </div>
          <div>
            <input
              type="text"
              value={newbook.pageCount}
              onChange={(e) => {
                setNewbook({ ...newbook, pageCount: e.target.value });
              }}
              placeholder="Pagecount"
            />
          </div>
        </div>
        <div>
          <div class="label">
            <label >ShortDescription </label>
          </div>
          <div>
            <textarea
              style={{width:"225px",height:"100px",fontSize:"16px",outline:"none",padding:"5px",borderRadius:"7px"}}
              name="shortdesc"
              id="short"
              value={newbook.shortDescription}
              onChange={(e) => {
                setNewbook({ ...newbook, shortDescription: e.target.value });
              }}
              placeholder="Give a ShortDescript.."
            ></textarea>
          </div>
        </div>
        <div>
          <div class="label">
            <label >ImageUrl </label>
          </div>
          <div>
            <input
              type="text"
              value={newbook.thumbnailUrl}
              onChange={(e) => {
                setNewbook({ ...newbook, thumbnailUrl: e.target.value });
              }}
              placeholder="Give your Image Url.."
            />
          </div>
        </div>
        <button
          type="button"
          onClick={() => {
            addinghandler();
          }}
        >
          Add a Book
        </button>
        <div id="statusmsg" style={{color:statusmsgstyle.color,margin:statusmsgstyle.margin}}>{statusmessage}</div>
      </div>
    </div>
  );
}

export default Home;
