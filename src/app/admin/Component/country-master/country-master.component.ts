import { Component, OnInit } from '@angular/core';
import { ICountry } from '../../Models/icountry';
import { CountriesService } from '../../Service/country-service/countries.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { CountryMasterListComponent } from '../country-master-list/country-master-list.component';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-country-master',
  templateUrl: './country-master.component.html',
  styleUrls: ['./country-master.component.css']
})
export class CountryMasterComponent implements OnInit {
  countrySearch:string='';
  countryList: any[] = [];
  modalRef!: BsModalRef;
  selectedCountry!: ICountry;
  //this.toastr.success('Hello world!', 'Toastr fun!');

  constructor(private readonly _service: CountriesService, private _modalService: BsModalService) { }

  ngOnInit(): void {
    this.reciveDataOfCountry();
  }
  addCountry(){
    this.openModal("Added New Country")
  }
  openModal(title:string) {
    this.modalRef = this._modalService.show(CountryMasterListComponent, {
      class: ('model-md'),
      initialState: {
        holdModel: this.selectedCountry,
        title:title
      }
    })
    this.modalRef.content.event.subscribe((res: any) => {
      this.reciveDataOfCountry();
    })
  }


  reciveDataOfCountry() {
    this.getDataOfCountries();
  }
  private getDataOfCountries() {
    this._service.getCountriesListService().subscribe({
      next: (response) => {
        this.countryList = response;
        console.log(response);
      },
      error: (e) => console.error(e)
    });
  }

  deleteCountry(countryId: ICountry) {


    if (confirm()) {

      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {

          this._service.deleteCountriesService(countryId).subscribe(res => {
            // alert(res);
            this.reciveDataOfCountry();

          })
        }
        else {
          Swal.fire({
            title: "keep it!",
            text: "Your file has been Safe.",
            icon: "info"
          });
        }

      });



    }

  }

  updateCountryData(countries: ICountry) {
    this.selectedCountry = countries;

    console.log(countries);
    this.openModal("Edit Country");
  }

}
