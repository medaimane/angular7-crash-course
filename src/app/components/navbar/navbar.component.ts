import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // Get all 'navbar-burger' elements
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {

      // Add a click event on each of them
      $navbarBurgers.forEach( el => {
        el.addEventListener('click', () => {

          // Get the target from the 'data-target' attribute
          const target = el.dataset.target;
          const $target = document.getElementById(target);

          // Toggle the 'is-active' class on both the 'navbar-burger' and the 'navbar-menu'
          el.classList.toggle('is-active');
          $target.classList.toggle('is-active');

        });
      });
    }
  }

  signup() {
    swal({
      title: 'Good job, You\'re registered!',
      text: 'You clicked the button!',
      icon: 'success',
    });
  }

  signin() {
    swal({
      title: 'Good job, You\'re logged in!',
      text: 'You clicked the button!',
      icon: 'success',
    });
  }

}
