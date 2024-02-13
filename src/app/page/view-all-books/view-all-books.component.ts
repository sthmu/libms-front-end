import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { CommonModule} from '@angular/common';
import { waitForAsync } from '@angular/core/testing';

@Component({
  selector: 'app-view-all-books',
  standalone: true,
  imports: [HttpClientModule,FormsModule,CommonModule  ],
  templateUrl: './view-all-books.component.html',
  styleUrl: './view-all-books.component.css'
})
export class ViewAllBooksComponent implements OnInit{
    private http;
    public bookList: any[]=[];
    public selectedBook:any;
    
    constructor(private httpClient:HttpClient){
      this.http=httpClient

    }

    ngOnInit(): void {
        this.loadBooks();
    }
     loadBooks(){
      this.http.get('http://localhost:8081/book/getall').subscribe((data:any)=>{
        console.log(data);
        this.bookList=data;
      })
    }

    deleteBook(){
      this.http.delete(`http://localhost:8081/book/${this.selectedBook.id}`).subscribe((data) =>{
        console.log(data);
        this.loadBooks();
        this.selectedBook=null;
      })
    }

    setSelectedBook(book:any){
      this.selectedBook=book;
      console.log(this.selectedBook.title);
    }

    resetItems(){
      const books: any[] = [
        {
            isbn: "2468",
            title: "The Joy of Cooking",
            author: "Julia Child",
            category: "Cookbook",
            qty: 29
        },
        {
            isbn: "1357",
            title: "Mastering the Art of French Cooking",
            author: "Julia Child",
            category: "Cookbook",
            qty: 15
        },
        {
            isbn: "3692",
            title: "The Catcher in the Rye",
            author: "J.D. Salinger",
            category: "Fiction",
            qty: 10
        },
        {
            isbn: "9876",
            title: "To Kill a Mockingbird",
            author: "Harper Lee",
            category: "Fiction",
            qty: 25
        },
        {
            isbn: "5432",
            title: "1984",
            author: "George Orwell",
            category: "Fiction",
            qty: 20
        },
        {
            isbn: "1010",
            title: "The Great Gatsby",
            author: "F. Scott Fitzgerald",
            category: "Fiction",
            qty: 18
        },
        {
            isbn: "7777",
            title: "Harry Potter and the Sorcerer's Stone",
            author: "J.K. Rowling",
            category: "Fantasy",
            qty: 30
        },
        {
            isbn: "8888",
            title: "The Hobbit",
            author: "J.R.R. Tolkien",
            category: "Fantasy",
            qty: 22
        },
        {
            isbn: "9999",
            title: "The Lord of the Rings",
            author: "J.R.R. Tolkien",
            category: "Fantasy",
            qty: 12
        },
        {
            isbn: "4567",
            title: "The Da Vinci Code",
            author: "Dan Brown",
            category: "Mystery",
            qty: 15
        },
        {
            isbn: "6543",
            title: "The Girl with the Dragon Tattoo",
            author: "Stieg Larsson",
            category: "Mystery",
            qty: 8
        },
        {
            isbn: "3210",
            title: "Gone Girl",
            author: "Gillian Flynn",
            category: "Mystery",
            qty: 13
        },
        {
            isbn: "4444",
            title: "The Shining",
            author: "Stephen King",
            category: "Horror",
            qty: 17
        },
        {
            isbn: "5555",
            title: "Dracula",
            author: "Bram Stoker",
            category: "Horror",
            qty: 11
        },
        {
            isbn: "6666",
            title: "Frankenstein",
            author: "Mary Shelley",
            category: "Horror",
            qty: 9
        },
        {
            isbn: "7777",
            title: "Pride and Prejudice",
            author: "Jane Austen",
            category: "Romance",
            qty: 28
        },
        {
            isbn: "8888",
            title: "Romeo and Juliet",
            author: "William Shakespeare",
            category: "Romance",
            qty: 19
        },
        {
            isbn: "9999",
            title: "Sense and Sensibility",
            author: "Jane Austen",
            category: "Romance",
            qty: 24
        },
        {
            isbn: "1234",
            title: "Twilight",
            author: "Stephenie Meyer",
            category: "Romance",
            qty: 14
        },
        {
            isbn: "4321",
            title: "The Notebook",
            author: "Nicholas Sparks",
            category: "Romance",
            qty: 16
        }
    ];

    this.http.post("http://localhost:8081/book/addall",books).subscribe(response =>{
      console.log('Books reset Successfully :',response);
      this.loadBooks();
    },
    error => {
      console.error("Error adding books: ",error);
    })
    
    }

    deleteAll(){
      this.http.delete('http://localhost:8081/book/deleteall').subscribe(data=>{
        console.log(data);
        this.loadBooks();
      })
    }

    updateBook(){
      let postApi = "http://localhost:8081/book/add";
      this.http.post(postApi,this.selectedBook).subscribe(data =>{
        console.log("saved");
        this.loadBooks();
        this.selectedBook=null; 
      })
    }



}
