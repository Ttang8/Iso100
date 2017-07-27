# == Schema Information
#
# Table name: comments
#
#  id         :integer          not null, primary key
#  user_id    :integer          not null
#  photo_id   :integer          not null
#  body       :text             not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Comment < ApplicationRecord
  validates :body, presence: true

  belongs_to :user
  belongs_to :photo

  def time
    seconds = (Time.now.utc - self.created_at).floor
    minutes = (seconds/60).floor
    hours = (minutes/60).floor
    days = (hours/24).floor

    

    return "#{days}d #{hours % 24}h #{minutes % 60 }m #{seconds % 60}s ago"
  end

end
