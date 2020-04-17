

  # frozen_string_literal: true

class MainController < ApplicationController
    layout "main"

  def index
    @initialProps = { name: "Stranger" }
  end
end
