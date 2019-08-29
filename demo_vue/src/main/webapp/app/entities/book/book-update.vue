<template>
    <div class="row justify-content-center">
        <div class="col-8">
            <form name="editForm" role="form" novalidate v-on:submit.prevent="save()" >
                <h2 id="jhdemoVueApp.book.home.createOrEditLabel" v-text="$t('jhdemoVueApp.book.home.createOrEditLabel')">Create or edit a Book</h2>
                <div>
                    <div class="form-group" v-if="book.id">
                        <label for="id" v-text="$t('global.field.id')">ID</label>
                        <input type="text" class="form-control" id="id" name="id"
                               v-model="book.id" readonly />
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" v-text="$t('jhdemoVueApp.book.name')" for="book-name">Name</label>
                        <input type="text" class="form-control" name="name" id="book-name"
                            :class="{'valid': !$v.book.name.$invalid, 'invalid': $v.book.name.$invalid }" v-model="$v.book.name.$model"  required/>
                        <div v-if="$v.book.name.$anyDirty && $v.book.name.$invalid">
                            <small class="form-text text-danger" v-if="!$v.book.name.required" v-text="$t('entity.validation.required')">
                                This field is required.
                            </small>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" v-text="$t('jhdemoVueApp.book.price')" for="book-price">Price</label>
                        <input type="number" class="form-control" name="price" id="book-price"
                            :class="{'valid': !$v.book.price.$invalid, 'invalid': $v.book.price.$invalid }" v-model.number="$v.book.price.$model"  required/>
                        <div v-if="$v.book.price.$anyDirty && $v.book.price.$invalid">
                            <small class="form-text text-danger" v-if="!$v.book.price.required" v-text="$t('entity.validation.required')">
                                This field is required.
                            </small>
                            <small class="form-text text-danger" v-if="!$v.book.price.number" v-text="$t('entity.validation.number')">
                                This field should be a number.
                            </small>
                        </div>
                    </div>
                </div>
                <div>
                    <button type="button" id="cancel-save" class="btn btn-secondary" v-on:click="previousState()">
                        <font-awesome-icon icon="ban"></font-awesome-icon>&nbsp;<span v-text="$t('entity.action.cancel')">Cancel</span>
                    </button>
                    <button type="submit" id="save-entity" :disabled="$v.book.$invalid || isSaving" class="btn btn-primary">
                        <font-awesome-icon icon="save"></font-awesome-icon>&nbsp;<span v-text="$t('entity.action.save')">Save</span>
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>
<script lang="ts" src="./book-update.component.ts">
</script>
