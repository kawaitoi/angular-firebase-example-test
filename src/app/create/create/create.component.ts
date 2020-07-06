import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { PetService } from 'src/app/service/pet.service';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  petIds = [...Array(10)].map((_, i) => i + 1);

  config: SwiperConfigInterface = {
    loop: true,
    navigation: true,
    pagination: {
      el: '.pager',
      clickable: true
    },
    centeredSlides: true,
    slidesPerView: 3
  };
  selectedPetId = 0;

  form = this.fb.group({
    name: ['', [
      Validators.required,
      Validators.maxLength(10)
    ]],
    gender: ['', [
      Validators.required,
      Validators.pattern(/male|female/)
    ]]
  });

  get nameControl() {
    return this.form.get('name') as FormControl;
  }

  constructor(
    private fb: FormBuilder,
    private petService: PetService,
    private authService: AuthService
  ) { }

  ngOnInit() {
  }

  submit() {
    const formDate = this.form.value;
    this.petService.createPet({
      name: formDate.name,
      gender: formDate.gender,
      petImageId: this.selectedPetId,
      level: 1,
      exp: 0,
      trainerID: this.authService.uid

    });
  }

}
