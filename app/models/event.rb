class Event < ActiveRecord::Base
  validates :name, uniqueness: true
  def self.increment(name)
    @event = where(name: name).first
    @event.times = @event.times + 1
    @event.save
  end
end
