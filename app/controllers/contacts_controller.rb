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
    else
      flash[:errors] = @contact.errors.full_messages
      flash[:contact_params] = contact_params
    end
    redirect_to root_url
  end
  
  def import
    JSON.parse(params[:contacts][:json]).each do |person|
      @contact = Contact.create(person)
    end
    redirect_to root_url
  end
  
  def destroy
    @contact = Contact.find(params[:id])
    @contact.destroy
    redirect_to root_url
  end
  
  private
  def contact_params
    params.require(:contact).permit(:first_name, :last_name, :phone_number, :image)
  end
end
