import React from 'react'
import ReactDOM from 'react-dom/client'
import "./index.css";
import { books } from './books'
import Book from './Book';

// function Greeting(){
//     return <h1>My First Component</h1>
// }

// function Greeting(){
//     return React.createElement('h2', {}, 'hello world')
// }

// function Greeting(){
//     return <div>
//         <h1>My First Component</h1>
//     </div>
// }

// function Greeting(){
//     return <div>
//         <h1>My First Component</h1>
//         <ul>
//             <li><a href="#">nice-guy</a></li>
//         </ul>
//         <input type="text" />
//     </div>
// }

// function Greeting()
// {
//     return <div>
//         <Person />
//         <Message />
        

//     </div>
// }

// const Person = () => <h2>John Doe</h2>;
// const Message = () => {
//     return <p>this is my component</p>
// }

// const firstBook = {
    //     author: "Christopher F. Rufo",
    //     title: "America's Cultural Revolution",
    //     img: "./images/book1.jpg"
    // }
    // const secondBook = {
        //     author: " James Clear",
        //     title: "Atomic Habits",
        //     img: "./images/book2.jpg"
        // }
        
        
        // const BookList = () => {
            //     return <section className='booklist'>
            //         <Book author={firstBook.author} title={firstBook.title} img={firstBook.img}>
            //         <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum tempora quaerat quidem nam iste vel vitae porro corporis officiis vero?</p>
            //         <button>click me</button>
            //         </Book>
            //         <Book author={secondBook.author} title={secondBook.title} img={secondBook.img} />
            //     </section>
            // }
            // const Book = (props) => {
                //     console.log(props)
                //     const {img, title, author} = props
                //     return <article className='book'>
                //         <img src={img} alt={title} />
                //         <h2>{title}</h2>
                //         <h4>{author.toUpperCase()}</h4>
                
                //     </article>
                // }
                // const BookList = () => {
                //         return <section className='booklist'>
                //             <Book author={firstBook.author} title={firstBook.title} img={firstBook.img}>
                //                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, iusto?</p>
                //             </Book>
                //             <Book author={secondBook.author} title={secondBook.title} img={secondBook.img} />
                //         </section>
                //     }
                    
            
                    // const Book = (props) => {
                    //     const { img, title, author,children } = props
                    //     console.log(props)
                    //     return <article className='book'>
                    //         <img src={img} alt={title} />
                    //         <h2>{title}</h2>
                    //         <h4>{author.toUpperCase()}</h4>
                    //         {children}
                           
                    //     </article>
                    // }
                    
                    
                    // const names = ['john', 'james', 'susan']
                    // const newNames = names.map((name) => {
                        //     console.log(name)
                        //     return <h1>{name}</h1>
                        // });
                        // console.log(newNames)
                        // const BookList = () => {
                            //     return <section className='booklist'>
                            //       {newNames}
                            //     </section>
                            // }
                            
                            

                            
// const BookList = () => {
//     return <section className='booklist'>
//         {books.map((book) => {
//             const {img, title, author, id} =book
//             console.log(book)
//             return <Book img={img} title={title} author={author} key={id}>
//             </Book>
//       })}
//     </section>
// }


// const Book = (props) => {
//     const { img, title, author} = props
//     console.log(props)
//     return <article className='book'>
//         <img src={img} alt={title} />
//         <h2>{title}</h2>
//         <h4>{author.toUpperCase()}</h4>
       
//     </article>
// }

// const BookList = () => {
//     return <section className='booklist'>
//         {books.map((book) => {
//             return <Book book={book} key={book.id}>
//             </Book>
//       })}
//     </section>
// }

// const Book = (props) => {
//     const { img, title, author} = props.book
//     console.log(props)
//     return <article className='book'>
//         <img src={img} alt={title} />
//         <h2>{title}</h2>
//         <h4>{author.toUpperCase()}</h4>
       
//     </article>
// }

// const BookList = () => {
//     return <section className='booklist'>
//         {books.map((book) => {
//             return <Book {...book} key={book.id}>
//             </Book>
//       })}
//     </section>
// }

// const Book = (props) => {
//     const { img, title, author} = props
//     console.log(props)
//     return <article className='book'>
//         <img src={img} alt={title} />
//         <h2>{title}</h2>
//         <h4>{author.toUpperCase()}</h4>
       
//     </article>
// }


// const BookList = () => {
//     return <section className='booklist'>
//         <EventExamples/>
//         {books.map((book) => {
//             return <Book {...book} key={book.id}>
//             </Book>
//       })}
//     </section>
// }


// const EventExamples = () => {
//     const handleFormInput = (e) => {
//         // console.log(e)
//         console.log(e.target)
//         console.log(e.target.name)
//         console.log(e.target.value)
//         console.log("handle form input")
//     };
//     const handleButtonClick = () => {
//         alert("button clicked")
//     };
//     const handleFormSubmission = (e) => {
//         e.preventDefault()
//         console.log("form submitted")
//     };
//     return <section>
//         <form onSubmit={handleFormSubmission}>
//             <h2>Typical Form</h2>
//             <input type="text" name='example' onChange={handleFormInput} style={{margin: "1rem 0"}}/>
//         </form>
//         <button onClick={handleButtonClick} >Click Me</button>
//     </section>
// }

// const Book = (props) => {
//     const { img, title, author} = props
//     console.log(props)
//     return <article className='book'>
//         <img src={img} alt={title} />
//         <h2>{title}</h2>
//         <h4>{author.toUpperCase()}</h4>
       
//     </article>
// }

// const BookList = () => {
//     return <section className='booklist'>
//         <EventExamples/>
//         {books.map((book) => {
//             return <Book {...book} key={book.id}>
//             </Book>
//       })}
//     </section>
// }


// const EventExamples = () => {
//     return <section>
//         <form >
//             <h2>Typical Form</h2>
//             <input type="text" name='example' onChange={(e) => console.log(e.target.value)} style={{margin: "1rem 0"}}/>
//         </form>
//         <button onClick={() => console.log("click me")} >Click Me</button>
//     </section>
// }

// const Book = (props) => {
//     const { img, title, author} = props
//     console.log(props)
//     return <article className='book'>
//         <img src={img} alt={title} />
//         <h2>{title}</h2>
//         <h4>{author.toUpperCase()}</h4>
       
//     </article>
// }


// const BookList = () => {
//     return <section className='booklist'>
//         {books.map((book) => {
//             return <Book {...book} key={book.id}>
//             </Book>
//       })}
//     </section>
// }

// const Book = (props) => {
//     const { img, title, author} = props
//     console.log(props)
//     const displayTitle = () => {
//         console.log(title)
//     }
//     return <article className='book'>
//         <img src={img} alt={title} />
//         <h2>{title}</h2>
//         <button onClick={displayTitle}>Display Title</button>
//         <h4>{author.toUpperCase()}</h4>
       
//     </article>
// }

// const BookList = () => {
//     const someValue = "ShakeAndBake"
//     const displayValue = () => {
//         console.log(someValue)
//     }
//     return <section className='booklist'>
//         {books.map((book) => {
//             return <Book {...book} key={book.id} displayValue={displayValue}>
//             </Book>
//         })}
//     </section>
// }

// const Book = (props) => {
//     const { img, title, author, displayValue} = props
//     console.log(props)
//     return <article className='book'>
//         <img src={img} alt={title} />
//         <h2>{title}</h2>
//         <button onClick={displayValue}>Click me</button>
//         <h4>{author.toUpperCase()}</h4>
       
//     </article>
// }

// const BookList = () => {
//     const getBook = (id) => {
//         const book = books.find((book) => book.id === id)
//         console.log(book)
//     }
//     return <section className='booklist'>
//         {books.map((book) => {
//             return <Book {...book} key={book.id} getBook={getBook}>
//             </Book>
//         })}
//     </section>
// }

// const Book = (props) => {
//     const { img, title, author,getBook, id} = props
//     console.log(props)
//     return <article className='book'>
//         <img src={img} alt={title} />
//         <h2>{title}</h2>
//         <button onClick={getBook(id)}>Click me</button>
//         <h4>{author.toUpperCase()}</h4>
       
//     </article>
// }


// const BookList = () => {
//     const getBook = (id) => {
//         const book = books.find((book) => book.id === id)
//         console.log(book)
//     }
//     return <section className='booklist'>
//         {books.map((book) => {
//             return <Book {...book} key={book.id} getBook={getBook}>
//             </Book>
//         })}
//     </section>
// }

// const Book = (props) => {
//     const { img, title, author,getBook, id} = props
//     console.log(props)
//     const getSingleBook = () =>{
//         getBook(id)
//     }
//     return <article className='book'>
//         <img src={img} alt={title} />
//         <h2>{title}</h2>
//         <button onClick={getSingleBook}>Click me</button>
//         <h4>{author.toUpperCase()}</h4>
       
//     </article>
// }

// const BookList = () => {
//     const getBook = (id) => {
//         const book = books.find((book) => book.id === id)
//         console.log(book)
//     }
//     return <section className='booklist'>
//         {books.map((book) => {
//             return <Book {...book} key={book.id} getBook={getBook}>
//             </Book>
//         })}
//     </section>
// }

// const Book = (props) => {
//     const { img, title, author,getBook, id} = props
//     console.log(props)
//     const getSingleBook = () =>{
//         getBook(id)
//     }
//     return <article className='book'>
//         <img src={img} alt={title} />
//         <h2>{title}</h2>
//         <button onClick={() => getBook(id)}>Click me</button>
//         <h4>{author.toUpperCase()}</h4>
       
//     </article>
// }

const BookList = () => {

    return (
        <>
        <h1>Amazon Best Seller</h1>
        <section className='booklist'>
        {books.map((book,index) => {
            return <Book {...book} key={book.id} number={index}>
            </Book>
        })}
        </section>
        </>
    );
}



const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />)