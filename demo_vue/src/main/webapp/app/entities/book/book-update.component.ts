import { Component, Vue, Inject } from 'vue-property-decorator';

import { numeric, required, minLength, maxLength } from 'vuelidate/lib/validators';

import AlertService from '@/shared/alert/alert.service';
import { IBook, Book } from '@/shared/model/book.model';
import BookService from './book.service';

const validations: any = {
  book: {
    name: {
      required
    },
    price: {
      required,
      numeric
    }
  }
};

@Component({
  validations
})
export default class BookUpdate extends Vue {
  @Inject('alertService') private alertService: () => AlertService;
  @Inject('bookService') private bookService: () => BookService;
  public book: IBook = new Book();
  public isSaving = false;

  beforeRouteEnter(to, from, next) {
    next(vm => {
      if (to.params.bookId) {
        vm.retrieveBook(to.params.bookId);
      }
    });
  }

  public save(): void {
    this.isSaving = true;
    if (this.book.id) {
      this.bookService()
        .update(this.book)
        .then(param => {
          this.isSaving = false;
          this.$router.go(-1);
          const message = this.$t('jhdemoVueApp.book.updated', { param: param.id });
          this.alertService().showAlert(message, 'info');
        });
    } else {
      this.bookService()
        .create(this.book)
        .then(param => {
          this.isSaving = false;
          this.$router.go(-1);
          const message = this.$t('jhdemoVueApp.book.created', { param: param.id });
          this.alertService().showAlert(message, 'success');
        });
    }
  }

  public retrieveBook(bookId): void {
    this.bookService()
      .find(bookId)
      .then(res => {
        this.book = res;
      });
  }

  public previousState(): void {
    this.$router.go(-1);
  }

  public initRelationships(): void {}
}
