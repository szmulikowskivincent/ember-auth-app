import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { next } from '@ember/runloop';

export default class MyProfileController extends Controller {
  @service router;

  nom = '';
  prenom = '';
  adresse = '';
  tva = '';
  genre = '';
  situation = '';
  avatarPreview = '';

  constructor() {
    super(...arguments);

    const profileData = JSON.parse(localStorage.getItem('profile'));
    if (profileData) {
      this.nom = profileData.nom || '';
      this.prenom = profileData.prenom || '';
      this.adresse = profileData.adresse || '';
      this.tva = profileData.tva || '';
      this.genre = profileData.genre || '';
      this.situation = profileData.situation || '';
      this.avatarPreview = profileData.avatarPreview || '';
    }
  }

  @action
  updateNom(event) {
    this.nom = event.target.value;
  }

  @action
  updatePrenom(event) {
    this.prenom = event.target.value;
  }

  @action
  updateAdresse(event) {
    this.adresse = event.target.value;
  }

  @action
  updateTva(event) {
    this.tva = event.target.value;
  }

  @action
  updateGenre(event) {
    this.genre = event.target.value;
  }

  @action
  updateSituation(event) {
    this.situation = event.target.value;
  }

  @action
  previewAvatar(event) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        this.avatarPreview = reader.result;
      };
      reader.readAsDataURL(file);
    } else {
      this.avatarPreview = '';
    }
  }

  @action
  submitForm(event) {
    event.preventDefault();

    const profileData = {
      nom: this.nom,
      prenom: this.prenom,
      adresse: this.adresse,
      tva: this.tva,
      genre: this.genre,
      situation: this.situation,
      avatarPreview: this.avatarPreview,
    };

    localStorage.setItem('profile', JSON.stringify(profileData));

    alert('Profil sauvegardé avec succès !');

    window.location.reload();

    this.setProperties({
      nom: '',
      prenom: '',
      adresse: '',
      tva: '',
      genre: '',
      situation: '',
      avatarPreview: '',
    });

    next(() => {
      this.router.transitionTo('/my-profile');
    });
  }

  @action
  goToLogin() {
    this.router.transitionTo('/home');
  }
}
