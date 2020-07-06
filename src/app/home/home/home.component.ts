import { Component, OnInit } from '@angular/core';
import { Pet } from 'src/app/interfaces/pet';
import { Observable } from 'rxjs';
import { PetService } from 'src/app/service/pet.service';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  pet$: Observable<Pet> = this.petService.getPet(
    this.authService.uid
  );


  constructor(
    private petService: PetService,
    private authService: AuthService
  ) { }

  ngOnInit() {
  }

}
