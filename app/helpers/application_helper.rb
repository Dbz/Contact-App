module ApplicationHelper
  def display_events
    @data = []
    @event = Event.where(name: :add_contact).first
    @data << "Contacts added " + @event.times.to_s + " times"
    @event = Event.where(name: :import_contacts).first
    @data << "Contacts imported " + @event.times.to_s + " times"
    @event = Event.where(name: :delete_contact).first
    @data << "Contacts deleted " + @event.times.to_s + " times"
    @data.join("\n")
  end
end
