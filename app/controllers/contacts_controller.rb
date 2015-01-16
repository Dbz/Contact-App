class ContactsController < ApplicationController
  def index
    @contact = Contact.new(flash[:contact_params]) || Contact.new
    @contacts = Contact.all
    render :index
  end
  
  def create
    @contacts = Contact.all
    @contact = Contact.new(contact_params)
    if @contact.save
      @contact = Contact.new
      Event.increment(:add_contact)
    else
      flash[:errors] = @contact.errors.full_messages
      flash[:contact_params] = contact_params
    end
    redirect_to root_url
  end
  
  def import
    JSON.parse(params[:contacts][:json]).each do |person|
      @contact = Contact.where(person).first_or_create!
    end
    Event.increment(:import_contacts)
    redirect_to root_url
  end
  
  def destroy
    @contact = Contact.find(params[:id])
    @contact.destroy
    Event.increment(:delete_contact)
    redirect_to root_url
  end
  
  private
  def contact_params
    params.require(:contact).permit(:first_name, :last_name, :phone_number, :image)
  end
end
