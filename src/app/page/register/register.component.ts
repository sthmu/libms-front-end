import { CommonModule } from '@angular/common';
import { HttpClient,HttpClientModule } from '@angular/common/http';
import { Component,OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';




@Component({
  selector: 'app-register',
  standalone: true,
  imports: [HttpClientModule,FormsModule,CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit{
  private http;
  public countryList:any;
  public selectedCountry:any;

  constructor(private httpClient:HttpClient) {
    this.http=this.httpClient;
  }


  ngOnInit(): void {
    this.loadCountries();
  }
  loadCountries() {
    let api="https://restcountries.com/v3.1/all";
    this.http.get(api).subscribe((data)=>{
      console.log(data);
      this.countryList=data;
    })
  }

  setSelectedCountry(){
   // this.selectedCountry=country;
    console.log("booayyyaa");
    //console.log(this.selectedCountry.name.common);
  }

}
