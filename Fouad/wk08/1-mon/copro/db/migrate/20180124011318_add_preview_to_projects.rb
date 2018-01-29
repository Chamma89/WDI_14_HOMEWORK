
 # in Terminal  > rails g migration add_preview_to_projects preview:string. Create info below.

class AddPreviewToProjects < ActiveRecord::Migration[5.1]
  def change
    add_column :projects, :preview, :string
  end
end
